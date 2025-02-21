# Personal Blogging API ✍️📖📝

A simple RESTful API for a personal blogging platform built using Express.js and MongoDB. This API allows users to create, read, update, delete, and filter blog posts. 🚀🖊️📚

## Features 🎯✅🛠️

- Create a new blog post
- Update an existing blog post
- Delete a blog post
- Get a single blog post
- Get all blog posts
- Search blog posts by title, content, or category

## Tech Stack 🏗️💻🛠️

- **Backend**: Node.js, Express.js
- **Database**: MongoDB (Mongoose ODM)

## API Endpoints 🌍📡🔗

### Create a Blog Post 📝➕🖊️

- **Method**: POST
- **Endpoint**: `/posts`
- **Request Body**:
  ```json
  {
    "title": "My First Blog Post",
    "content": "This is the content of my first blog post.",
    "category": "Technology",
    "tags": ["Tech", "Programming"]
  }
  ```
- **Response**:
  ```json
  {
    "id": "1",
    "title": "My First Blog Post",
    "content": "This is the content of my first blog post.",
    "category": "Technology",
    "tags": ["Tech", "Programming"],
    "createdAt": "2021-09-01T12:00:00Z",
    "updatedAt": "2021-09-01T12:00:00Z"
  }
  ```

### Update a Blog Post ✏️🔄📌

- **Method**: PATCH
- **Endpoint**: `/posts/:id`
- **Response**: Returns 200 OK with updated post or 404 if not found.

### Delete a Blog Post 🗑️🚫❌

- **Method**: DELETE
- **Endpoint**: `/posts/:id`
- **Response**: Returns 204 No Content or 404 if not found.

### Get a Single Blog Post 📜🔍📄

- **Method**: GET
- **Endpoint**: `/posts/:id`
- **Response**: Returns 200 OK with post data or 404 if not found.

### Get All Blog Posts 📚🗂️📰

- **Method**: GET
- **Endpoint**: `/posts`
- **Response**: Returns 200 OK with an array of blog posts.

### Search Blog Posts 🔎📑📝

- **Method**: GET
- **Endpoint**: `/posts?term=<search-term>`
- **Response**: Returns blog posts matching the search term in title, content, or category.

## Installation & Setup ⚙️🛠️📦

1. Clone the repository:
   ```sh
   git clone https://github.com/Idighekere/roadmap.sh-backend-projects.git
   cd blogging-platform-api
   ```
2. Install dependencies:
   ```sh
   pnpm install
   ```
3. Set up environment variables in a `.env` file:
   ```sh
   DB_CONNECTION_STRING=<your-mongodb-connection-string>
   PORT=5000
   NODE_ENV=<your environment>
   ```
4. Start the server:
   ```sh
   npm start
   ```

## Dependencies 📦📂⚡

- Express.js
- Mongoose
- dotenv (for environment variables)
- Nodemon 

## License 📜⚖️🔓

This project is open-source and available under the MIT License. 🎉📖🆓
