# Expense Tracker CLI Application

A command-line expense tracking application built as part of the [roadmap.sh](https://roadmap.sh) backend development learning path. This application helps users track and manage their expenses through simple command-line interfaces.

## Features

- 📝 Add expenses with description and amount
- 📅 Track expenses by date
- 💰 View total expenses
- 📊 Monthly expense summaries
- 📋 List all expenses
- 🔍 Filter expenses by month

## Installation

1. Clone the repository:

 ```bash
   git clone --depth=1 https://github.com/Idighekere/roadmap.sh-backend-projects.git

   # Navigate to the project Directory
   cd expense-tracker && npm i -g && npm i
   ```
## Usage

### Add an Expense
```bash
expense-tracker add --amount 20 --description "Lunch"
```

### View Summary

#### View total summary

```bash
expense-tracker summary
```
#### View monthly summary (e.g., for January)
```bash
expense-tracker summary --month 1
```

### List expenses
#### List all expenses
```bash
expense-tracker list
```

## Command Reference
```bash
expense-tracker --help
```
## Data Structure
Expenses are stored in the following format:

```JavaScript
{
    date: "2025-01-22",
    amount: 20,
    description: "Lunch"
}
```
## Project Structure
```Code
expense-tracker/
├── app.js              # Main application file
├── package.json        # Project dependencies
├── README.md          # Project documentation
└── data/              # Data storage directory
    └── expenses.json  # Expense records
```
## Dependencies
[Commander.js](https://github.com/tj/commander.js/): Command-line interface
