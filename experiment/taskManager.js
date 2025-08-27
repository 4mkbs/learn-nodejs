/*
 * Titile: taskManager.js
 * Description: 4mkbs code's
 * Author: Muhammad Khairul Bashar Sakib ( MKBS )
 * Date: 27/08/2025 20:03:10
 */

const fs = require("fs");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const tasksFile = "tasks.txt";

function readTasks() {
  fs.readFile(tasksFile, "utf-8", (err, data) => {
    if (err) {
      console.error("Error reading tasks:", err);
      return;
    }
    console.log("\nTasks:");
    const tasks = data.split("\n").filter((task) => task.trim() !== "");
    tasks.forEach((task, index) => {
      console.log(`${index + 1}: ${task}`);
    });
  });
}

function addTask(task) {
  fs.appendFile(tasksFile, `${task}\n`, (err) => {
    if (err) throw err;
    console.log("Task added.");
  });
}

function deleteTask(index) {
  fs.readFile(tasksFile, "utf-8", (err, data) => {
    if (err) {
      console.error("Error reading tasks:", err);
      return;
    }
    const tasks = data.split("\n").filter((task) => task.trim() !== "");
    if (index < 1 || index > tasks.length) {
      console.error("Invalid task index.");
      return;
    }
    tasks.splice(index - 1, 1);
    fs.writeFile(tasksFile, tasks.join("\n") + "\n", (err) => {
      if (err) throw err;
      console.log(`Task ${index} deleted.`);
    });
  });
}

function displayMenu() {
  console.log("\nTask Manager");
  console.log("1. View Tasks");
  console.log("2. Add Task");
  console.log("3. Delete Task");
  console.log("4. Exit");
  rl.question("Choose an option: \n", (option) => {
    handleMenuOption(option);
  });
}

function handleMenuOption(option) {
  switch (option) {
    case "1":
      readTasks();
      displayMenu();
      break;
    case "2":
      rl.question("Enter task description: ", (task) => {
        addTask(task);
        displayMenu();
      });
      break;
    case "3":
      rl.question("Enter task index to delete: ", (index) => {
        deleteTask(parseInt(index));
        displayMenu();
      });
      break;
    case "4":
      console.log("Exiting Task Manager...");
      rl.close();
      break;
    default:
      console.log("Invalid option.");
      displayMenu();
  }
}

// check if task file exists, if not create it
if (!fs.existsSync(tasksFile)) {
  fs.writeFileSync(tasksFile, JSON.stringify([]));
}

displayMenu();

module.exports = {
  readTasks,
  addTask,
  deleteTask,
};
