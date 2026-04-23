# Expense Tracker CLI

A simple command-line expense tracker built with Node.js and Commander.

## Features

- Add expenses with description and amount
- List all expenses
- Delete an expense by ID
- Show total expense summary
- Show monthly summary by month number
- Persist data in a local JSON file

## Tech Stack

- Node.js
- commander

## Project Files

- `expenseTracker.js`: CLI entry and command handlers
- `expenses.json`: stored expense data
- `package.json`: project metadata and CLI binary mapping

## Installation

```bash
npm install
```

## Run Options

### Option 1: Run directly with Node

```bash
node expenseTracker.js <command> [options]
```

### Option 2: Use as a global/local CLI command

The project defines this binary:

- `expense-tracker` -> `./expenseTracker.js`

Link it locally:

```bash
npm link
```

Then run:

```bash
expense-tracker <command> [options]
```

## Commands

### Add an expense

```bash
expense-tracker add --description "Lunch" --amount 12.5
```

Output:

```text
Expense added successfully (ID: 1)
```

### List expenses

```bash
expense-tracker list
```

Output format:

```text
ID  Date       Description  Amount
1   2026-04-23  Lunch  $12.5
```

### Delete an expense

```bash
expense-tracker delete --id 1
```

Output:

```text
Expense deleted successfully
```

### Show summary (all months)

```bash
expense-tracker summary
```

Output:

```text
Total expenses: $12.5
```

### Show summary for one month

```bash
expense-tracker summary --month 4
```

Output:

```text
Total expenses for month 4: $12.5
```

## Data Storage

Expenses are stored in `expenses.json` in this format:

```json
[
  {
    "id": 1,
    "date": "2026-04-23",
    "description": "Lunch",
    "amount": 12.5
  }
]
```

## Notes

- Dates are stored as `YYYY-MM-DD`.
- `--amount` is parsed as a number.
- `--id` and `--month` are parsed as integers.
- Deleting an expense removes matching IDs from `expenses.json`.
