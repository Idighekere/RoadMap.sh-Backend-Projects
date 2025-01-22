#!/usr/bin/env node

import { program } from "commander";
import fs from 'fs';
import { __dirname, __filename } from "./config.js";
import path from "path";
import { getMonthFromDate, getMonthName, formatDate } from "./utils.js";

// program.name('expense-tracker').description('A simple expense tracker application to manage your finances. The application allows users to add, delete, and view their expenses.').version('1.0.0')

const PATH_TO_EXPENSE_FILE = path.join(__dirname, "./expenses.json")


const colors = {
    reset: "\x1b[0m", //this will be used to reset the color back to it's default color
    green: "\x1b[32m",
    red: "\x1b[31m",
    yellow: "\x1b[33m",
    cyan: "\x1b[36m",
};
const readExpenses = () => {

    if (fs.existsSync(PATH_TO_EXPENSE_FILE)) {
        const content = fs.readFileSync(PATH_TO_EXPENSE_FILE, 'utf8')
        return JSON.parse(content)
    }
    return []
}

const writeExpenses = (expenses) => {
    fs.writeFileSync(PATH_TO_EXPENSE_FILE, JSON.stringify(expenses, null, 2))
}

const addExpense = (description, amount) => {

    const expenses = readExpenses()
    const newExpense = {
        id: expenses.length + 1,
        description,
        amount,
        createdAt: new Date(),
        updatedAt: new Date()
    }

    expenses.push(newExpense)
    writeExpenses(expenses)

    console.log(`${colors.green}✅ Expense added successfully (ID:${newExpense.id})${colors.reset}`);

}


const updateExpense = (id, newDescription, newAmount) => {

    const expenses = readExpenses()

    let expenseToUpdate = expenses.find((expense) => expense.id == id)

    if (!expenseToUpdate) {
        console.log(`${colors.red}❌An expense with ID: ${id} doesn't exist ${colors.reset}`);

        process.exit(1)
    }
    if (newDescription) {

        expenseToUpdate.description = newDescription
    }

    if (newAmount) {

        expenseToUpdate.amount = newAmount
    }
    expenseToUpdate.updatedAt = new Date()

    writeExpenses(expenses)

    console.log(`${colors.green}✅ Expense updated successfully`);

}


const deleteExpense = (id) => {

    const expenses = readExpenses()

    const expenseToDelete = expenses.find((expense) => expense.id == id)


    //To make sure that the id is a number
    if (isNaN(id)) {
        console.log(`${colors.red}Id must be a number${colors.reset}`);
        process.exit(1)
    }

    if (!expenseToDelete) {
        console.log(`${colors.red}❌An expense with ID: ${id} doesn't exist ${colors.reset}`);
        process.exit(1)

    }
    const newExpenses = expenses.filter((expense) => expense.id !== id)
    const updatedExpensesWithId = newExpenses.map((item, index) => ({ ...item, id: index + 1 })) //to reassign IDs based on the new index

    writeExpenses(updatedExpensesWithId)
    console.log(`${colors.green}✅ Expense deleted successfully`);
}

const listExpenses = () => {

    const expenses = readExpenses()

    if (expenses.length === 0) {
        console.log(`${colors.yellow}No Expenses found`);
        process.exit(1)
    }

    // Define column widths
    const cols = {
        id: 4,
        date: 12,
        description: 20,
        amount: 8
    };
    // Print table header
    console.log(
        'ID'.padEnd(cols.id) +
        'Date'.padEnd(cols.date) +
        'Description'.padEnd(cols.description, " ") +
        'Amount\n'
    ); expenses.forEach(expense => {

        const { id, createdAt, description, amount } = expense



        console.table(`${id.toString().padEnd(cols.id)}${formatDate(createdAt).toString().padEnd(cols.date)}${description.toString().padEnd(cols.description)}$${(amount)}`);


    });
}


const summaryOfExpenses = (monthNum) => {

    const expenses = readExpenses()


    if (expenses.length == 0 || !expenses) {
        console.log(`${colors.yellow}No expense found.`);
        process.exit(1)
    }


    //Validate month number
    if (monthNum < 0 || monthNum > 12) {
        console.log(`${colors.red}Error: Month number must between 1 and 12`);
        process.exit(1)
    }

    const monthlyExpenses = expenses.filter((expense) => {
        const expenseDate = new Date(expense.createdAt)

        return expenseDate.getMonth() == monthNum - 1
        //NOTE - getMonth returns the month from 0 to 11 so I subtract one from the monthNum to match with it

        //I can also do
        // return expenseDate.getMonth() + 1 == monthNum
    })

    // console.log(monthlyExpenses);

    //calculate monthly Total
    const monthlyTotal = monthlyExpenses.reduce((acc, curr) => acc + curr.amount, 0)
    let monthName = new Date(2025, monthNum - 1).toLocaleString('default', { month: 'long' }); //NOTE - the year doesn't matter, toLocaleString() with the month: 'long' option returns the month name. 0 for January, 1 for feb, 11 for decemeber, so we have to subtract 1 from the monthNum to give the appropriate month name


    if (monthlyExpenses.length > 0) {

        console.log(`${colors.cyan}\n\tSummary for ${monthName}`.toUpperCase());
        //Display details for te month
        console.log(`${colors.cyan}\nExpenses details: ${colors.reset}`);
        console.log('Date'.padEnd(12) + 'Description'.padEnd(20) + 'Amount');

        monthlyExpenses.forEach((expense) => {
            console.log(`${formatDate(expense.createdAt)?.toString().padEnd(12)}${expense.description.padEnd(20)}${colors.red}$${expense.amount}`);

        })

        console.log(`${colors.cyan}\nTotal expenses for ${monthName}: $${monthlyTotal}`);
    } else {

        //Total summary for all expenses
        const totalAmount = expenses.reduce((acc, curr) => acc + curr.amount, 0);

        // Display total summary
        console.log(`${colors.cyan}\n\tTOTAL EXPENSE SUMMARY${colors.reset}`);
        console.log(`Total Expenses: $${totalAmount}`);
        console.log(`Number of Expenses: ${expenses.length}`);

        //Getting summary  for each months

        // Initialize array with 12 zeros (one for each month)

        const monthlyTotals = expenses.reduce((acc, expense) => {
            const month = new Date(expense.createdAt).getMonth()
            acc[month] += expense.amount
            return acc

        }, Array(12).fill(0)) //An object can also be used here instead of an array



        console.log(`\nMonthly Breakdown`);
        console.log(colors.cyan + ' Month'.padEnd(12), 'Amount'.padEnd(8), colors.reset);

        monthlyTotals.forEach((amount, index) => {

            if (amount > 0) {
                const monthName = new Date(2024, index).toLocaleString('default', { month: 'long' })

                console.log(' ', monthName.padEnd(12), "$" + amount.toString().padEnd(8), colors.reset);


            }

        })


    }

}

program.command('add')
    .description('Add an expense')
    .option('-d, --description <text>', 'description of the expense')
    .option('-a, --amount <number>', 'The amount spent')
    .action((options) => {

        const { description, amount } = options
        addExpense(description, Number(amount))

    })

program.command('update')
    .description('Update an expense')
    .requiredOption('--id <number>', 'The ID of the expense')
    .option('-d, --description <text>', 'description of the expense')
    .option('-a, --amount <number>', 'The amount spent')
    .action((options) => {
        const { id, description, amount } = options
        updateExpense(Number(id), description, Number(amount))
    })

program.command('delete')
    .description('Delete an expense')
    .requiredOption('--id <number>', 'The ID of the expense')
    .action((options) => {
        const { id } = options

        deleteExpense(Number(id))
    })

program.command('list')
    .description('List all available expenses')
    .action(() => {
        listExpenses()
    })

program.command('summary')
    .description('Total expenses')
    .option('-m, --month [number]', 'The month e.g July => 7')
    .action((options) => {
        const { month } = options
        // console.log(month);
        summaryOfExpenses(Number(month))
        console.log(month);

    })

    //TODO - Set monthly budgets
    //TODO - Categories

program.parse(process.argv); //this is compulsory, else nothing works
