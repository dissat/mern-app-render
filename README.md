## About the project

This is a full-stack MERN application that manages the basic information of employees. The app uses an employee database from the MongoDB Atlas database and then display it using a React.

## Tech Stack

**Client:** React, Bootstrap

**Server:** NodeJS, ExpressJS

**Database:** MongoDB

## Run Locally

Clone the project

```bash
  git clone https://github.com/MarcoFridle/mern-app.git
```

Go to the project directory

```bash
  cd mern-app
```

Create an Atlas URI connection parameter in `server/.env` with your Atlas URI:
```
ATLAS_URI="mongodb+srv://<username>:<password>@cluster0.6cgz2s1.mongodb.net/?retryWrites=true&w=majority"
PORT=5000
```

Create an hostname on server enviroment variable in `client/.env` with your hostname on server:
```
REACT_APP_MERN_APP=http://localhost:5000"
```
Create in main folder a .env for mongodb credentials

Install dependencies

```bash
  cd server
  npm install
```

```bash
  cd client
  npm install
```

Start the server

```bash
  cd server
  node server.js
```
Start the Client

```bash
  cd client
  npm start
```
  

## Features in the project

- The user can **create** the information of a employee, and managing it.

- **Displaying** the information of employees, including the name, position, and level of the employee.

- Includes **Update** and **Delete** actions.

