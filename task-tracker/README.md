# Task Tracker

Sample solution for the [task-tracker](https://roadmap.sh/projects/task-tracker) challenge from [roadmap.sh](https://roadmap.sh/).

This is a simple command-line interface (CLI) application for managing tasks.

## Features

- Add new tasks with a unique ID and store it in `JSON` format.
- List tasks by their status: `to-do`, `in-progress`, or `done`.
- Update the description of an existing task.
- Delete tasks by their ID.
- Mark tasks as `in-progress` or `done`.

## Prerequisites

- Node.js installed on your system.

## Installation

**Clone the Repository**

   ```bash
   git clone --depth=1 https://github.com/Idighekere/roadmap.sh-backend-projects.git

   # Navigate to the project Directory
   cd task-cli && npm i -g
   ```
## Usage

- **Add a Task**
```bash
task-cli add "Do assignment"
```

- **List all Tasks**
```bash
task-cli list
```
- **or by list the tasks by status**
```bash
# To list the tasks that are marked as to-do
task-cli list todo

# To list the tasks that are marked as in-progess
task-cli list in-progress

# To list the tasks that are marked as done
task-cli list done
```

- **Update a Task**
```bash
task-cli update 1 "Drink a Coffee and Do Coding"
```

- **Mark Task Status**
```bash
# Mark as `in-progress` with containing task ID as 1
task-cli mark-in-progress 1

# Mark as `done` with containing task ID as 1
task-cli mark-done 1
```

- **Delete a Task**
```bash
# Delete the task by containing its ID 1
task-cli delete 1
```

- **Delete all Tasks**
```bash
# Delete all available tasks
task-cli delete all
```

### Sample JSON structure
```JSON
[
  {
    "id": 1,
    "description": "Drink a Coffee",
    "status": "todo",
    "createdAt": "2025-01-21T00:43:32.617Z",
    "updatedAt":"2025-02-21T00:43:32.617Z"
  }
]
```
> Note: Place the JSON file in the same directory as the task code.
