#!/usr/bin/env node

import fs from "fs"
import path from "path"
import { argv } from "process";
import { __dirname, __filename } from "./config.js";

const tasksFilePath = path.join(__dirname, "tasks.json")
// console.log('Hi');

const colors = {
    reset: "\x1b[0m", //this will be used to reset the color back to it's default color
    green: "\x1b[32m",
    red: "\x1b[31m",
    yellow: "\x1b[33m",
    cyan: "\x1b[36m",
};

let startingIndex=0
const manual = `
Task CLI - Command Guide

Add a New Task:
  task-cli add "Task description"
  Example: task-cli add "Buy groceries"

Update a Task:
  task-cli update [task_id] "Updated description"
  Example: task-cli update 1 "Buy groceries and cook dinner"

Delete a Task:
  task-cli delete [task_id]
  Example: task-cli delete 1

Mark Task as In Progress:
  task-cli mark-in-progress [task_id]
  Example: task-cli mark-in-progress 1

Mark Task as Done:
  task-cli mark-done [task_id]
  Example: task-cli mark-done 1

List All Tasks:
  task-cli list

List Tasks by Status:
  task-cli list [status]
  Status options: done, todo, in-progress
  Examples:
    task-cli list done
    task-cli list todo
    task-cli list in-progress

List All Commands:
  task-cli help

For more details, use the --help flag with any command.
`

const help = `
Task CLI - Command Guide

Adding a New Task:
  task-cli add "Task description"
    - Adds a new task with the given description.
    - Example: task-cli add "Buy groceries"
      Output: Task added successfully (ID: 1)

Updating a Task:
  task-cli update [task_id] "Updated task description"
    - Updates the task with the given ID to the new description.
    - Example: task-cli update 1 "Buy groceries and cook dinner"

Deleting a Task:
  task-cli delete [task_id]
    - Deletes the task with the given ID.
    - Example: task-cli delete 1

Marking a Task as In Progress:
  task-cli mark-in-progress [task_id]
    - Marks the task with the given ID as in progress.
    - Example: task-cli mark-in-progress 1

Marking a Task as Done:
  task-cli mark-done [task_id]
    - Marks the task with the given ID as done.
    - Example: task-cli mark-done 1

Listing All Tasks:
  task-cli list
    - Lists all tasks regardless of their status.

Listing Tasks by Status:
  task-cli list [status]
    - Lists tasks filtered by the given status.
    - Status options:
      - done: Lists tasks marked as done.
      - todo: Lists tasks that are yet to be started.
      - in-progress: Lists tasks that are currently in progress.
    - Examples:
      task-cli list done
      task-cli list todo
      task-cli list in-progress

For further assistance, refer to the documentation or use the --help flag.
`

//ANCHOR - function to read files from the JSON file
const readTasks = () => {

    if (fs.existsSync(tasksFilePath)) {
        const data = fs.readFileSync(tasksFilePath, "utf-8")
        return JSON.parse(data)
    }
    return []
}

//ANCHOR - function to write taks to the JSON file
const writeTasks = (tasks) => {

    fs.writeFileSync(tasksFilePath, JSON.stringify(tasks,null,2), "utf-8")
}

//ANCHOR - function to add task to the JSON file
const addTask = (description) => {

    const tasks = readTasks()
    let newTask = {
        "id": tasks.length+1,
        "description": description,
        "status": "todo",
        "createdAt": new Date(),
        "updatedAt": new Date()
    }


    tasks.push(newTask)
    writeTasks(tasks)
    console.log(`✅Task added successfully (ID: ${newTask.id})`);

}

//ANCHOR - function to list all tasks if there's no argument or list by the provided status
const listTasks = (status) => {

    const tasks = readTasks()
    // console.log(status);

    let filtererdTasks = tasks

    if (status) {
        filtererdTasks = tasks?.filter((task) => task.status == status)
    } else if (!status == '') {
        console.log(`${colors.red}❌Invalid status. Use 'done', 'todo', or 'in-progress'. ${colors.reset}`);

    }
    if (filtererdTasks.length == 0) {
        console.log(`${colors.yellow}No tasks found.${colors.reset}`);

    } else {
        console.log(`${colors.cyan}📝LISTING ${status ? status.toUpperCase() : 'ALL'} TASKS: ${colors.reset}`);

        filtererdTasks.forEach((task) => {

            let statusText = ''
            switch (task.status) {
                case 'done':
                    statusText = `${colors.green}Done`
                    break;
                case 'in-progress':
                    statusText = `${colors.yellow}In-Progress`
                    break
                case 'todo':
                    statusText = `${colors.red}To-do`
                    break
                default:
                    statusText = ''
                    break;
            }

            console.log(`ID: ${task.id}. ${task.description} ${statusText} ${colors.reset}`)
        })

    }

    // console.log(filtererdTasks)


}
const deleteTask = (id) => {
    const tasks = readTasks()

    const taskExists=tasks.find((task)=>task.id==id)
    if (taskExists &&id!='all') {

        const newTasks = tasks.filter((task) => task.id !== Number(id))

        const newArray=[...newTasks]

        let tasksWithModifiedId=tasks.forEach((task)=>task.id=newTasks.length+1)

        writeTasks(newArray)
        console.log(`${colors.green}🚮Task ${id} successfully deleted${colors.reset}`);
    } else if (id == 'all') {
        tasks.length = 0
        writeTasks([])
        console.log(`${colors.green}🚮All Tasks successfully deleted${colors.reset}`);
    } else {
        console.log(`${colors.red}❌Task with an ID:${id} does not exist${colors.reset}`);

    }



}

//ANCHOR - functionn to update the description
const updateTask = (id, newDescription) => {

    const tasks = readTasks()

    const taskToUpdate = tasks.find((task) => task.id == Number(id))


    if (!taskToUpdate) {
        console.log(`${colors.red}❌Task with an ID:${id} does not exist${colors.reset}`);
        process.exit(1)

    }
    taskToUpdate.description = newDescription
    taskToUpdate.updatedAt = new Date()
    writeTasks(tasks)

    console.log(`${colors.green}✅Task ${id} updated successfully${colors.reset}`);


}

//ANCHOR - function to mark a task in-progress
const markInProgress = (id) => {

    const tasks = readTasks()
    console.log(id);


    const taskToMarkInProgress = tasks.find((task) => task.id === Number(id))
    console.log(taskToMarkInProgress);

    if (!taskToMarkInProgress) {
        console.error(`${colors.cyan}Task with an ID ${id} doesn't exist${colors.reset}`)
        process.exit(1)

    }

    if (taskToMarkInProgress.status == 'in-progress') {
        console.log(`${colors.green}Task ${id} is already in progress${colors.reset}`);
        process.exit(1)

    }

    taskToMarkInProgress.status = 'in-progress'
    taskToMarkInProgress.updatedAt = new Date()
    writeTasks(tasks)
    console.log(`${colors.green}✅Task ${id} successfully marked in progress ${colors.reset}`);

}

//ANCHOR - function to mark a task done
const markDone = (id) => {

    const tasks = readTasks()

    const taskToMarkDone = tasks.find((task) => task.id == Number(id))

    if (!taskToMarkDone) {
        console.log(`${colors.red}❌Task with an ID: ${id} doesn't exist ${colors.reset}`)
        process.exit(1)
    }

    if (taskToMarkDone.status == 'done') {
        console.log(`${colors.cyan}Task ${id} is already marked done${colors.reset}`);
        process.exit(1)
    }

    taskToMarkDone.status = "done"
    taskToMarkDone.updatedAt = new Date()
    writeTasks(tasks)
    console.log(`${colors.green}✅Task ${id}successfully marked done!! ${colors.reset}`);

}

const showHelp = () => {
    console.log(help)
}


const getArguments = (argv) => {
    console.log(`\n\t💎💎TASK-CLI💎💎\n`);



    const firstArgument = argv[0]
    const secondArgument = argv[1]
    const thirdArgument = argv[2]

    switch (firstArgument) {
        case "add":
            addTask(secondArgument)
            break;
        case "list":
            listTasks(secondArgument)
            break;
        case 'delete':
            deleteTask(secondArgument)
            break;
        case 'update':
            updateTask(secondArgument, thirdArgument)
            break
        case 'mark-in-progress':
            markInProgress(secondArgument)
            break
        case 'mark-done':
            markDone(secondArgument)
            break
        case '--help':
            showHelp()
            break;

        default:
            console.log(`${colors.red}❌Invalid commands ${colors.reset}`);

            console.log(`Type the ${colors.cyan}task-cli --help ${colors.reset} command to display the available commands`);
            break;
    }
}

const slicedArgv = argv.slice(2) //to remove the first two items which are path to nodejs and file name
getArguments(slicedArgv)
