#! /usr/bin/env node
const fs = require("fs");
const path = require("path");
const {Command} = require("commander");
const program = new Command();

const ExpenseFile = path.join(__dirname, "expenses.json");

function loadExpenses() {
    if(fs.existsSync(ExpenseFile)){
        const data = fs.readFileSync(ExpenseFile, "utf-8");
        return JSON.parse(data);
    }
    return [];
}

function saveExpenses(expenses) {
    fs.writeFileSync(ExpenseFile, JSON.stringify(expenses, null, 2));
}
function addExpense(description, amount) {
  const expenses = loadExpenses();
  const expenseId = expenses.length + 1;
  const expense = {
    id: expenseId,
    date: new Date().toISOString().split("T")[0], // YYYY-MM-DD format
    description,
    amount,
  };
  expenses.push(expense);
  saveExpenses(expenses);
  console.log(`Expense added successfully (ID: ${expenseId})`);
}

// List all expenses
function listExpenses() {
  const expenses = loadExpenses();
  console.log("ID  Date       Description  Amount");
  expenses.forEach((expense) => {
    console.log(
      `${expense.id}   ${expense.date}  ${expense.description}  $${expense.amount}`
    );
  });
}

// Delete an expense by ID
function deleteExpense(expenseId) {
  let expenses = loadExpenses();
  expenses = expenses.filter((expense) => expense.id !== expenseId);
  saveExpenses(expenses);
  console.log(`Expense deleted successfully`);
}

// View a summary of all expenses
function viewSummary(month) {
  const expenses = loadExpenses();
  const total = expenses.reduce((sum, expense) => {
    if (!month || new Date(expense.date).getMonth() + 1 === month) {
      return sum + expense.amount;
    }
    return sum;
  }, 0);
  if (month) {
    console.log(`Total expenses for month ${month}: $${total}`);
  } else {
    console.log(`Total expenses: $${total}`);
  }
}

// Command-line interface setup using Commander
program
  .command("add")
  .description("Add a new expense")
  .requiredOption("--description <description>", "Description of the expense")
  .requiredOption("--amount <amount>", "Amount of the expense", parseFloat)
  .action((options) => {
    addExpense(options.description, options.amount);
  });

program
  .command("list")
  .description("List all expenses")
  .action(() => {
    listExpenses();
  });

program
  .command("delete")
  .description("Delete an expense by ID")
  .requiredOption("--id <id>", "ID of the expense to delete", parseInt)
  .action((options) => {
    deleteExpense(options.id);
  });

program
  .command("summary")
  .description("View a summary of all expenses")
  .option(
    "--month <month>",
    "View summary for a specific month (1-12)",
    parseInt
  )
  .action((options) => {
    viewSummary(options.month);
  });

program.parse(process.argv);