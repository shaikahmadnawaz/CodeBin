# CodeBin

CodeBin is a web application that allows users to submit and display code snippets. It provides a platform where users can share code snippets in various programming languages.

## Features

- Users can submit code snippets along with their preferred language, standard input, and username.
- Submitted code snippets are displayed in a tabular format, showcasing the username, code language, standard input, and timestamp of submission.
- Source code is limited to the initial 100 characters for display.
- Backend powered by Express and Prisma, with data stored in MySQL tables.
- Frontend developed using React.

## Tech Stack

- Express.js
- React.js
- Prisma
- MySQL
- Redux (for managing state in the frontend)
- React Router (for client-side routing)
- Axios (for making HTTP requests)

## Setup Instructions

1. Clone the repository.
2. Navigate to the `server` directory and run `npm install` to install the required dependencies.
3. Run `npm run dev` to start the backend server.
4. Navigate to the `client` directory and run `npm install` to install the required dependencies.
5. Run `npm run dev` to start the frontend server.
6. Visit `http://localhost:5173` in your browser to view the application.
7. To connect to your own MySQL database, create a `.env` file in the `server` directory and add the following environment variables:

```bash
PORT=
DATABASE_URL=
CLIENT_URL=
```
