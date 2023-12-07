# Angular Todo App

Welcome to the Angular Todo App repository! This web application provides a simple interface to manage your to-do list efficiently. It is built with Angular on the front end, Express.js for the backend, and MySQL for data storage.

## Features

- Add new tasks to your to-do list.
- Mark tasks as completed or pending.
- Edit existing tasks to update details.
- Delete tasks when they are no longer needed.

## Technologies Used

- **Frontend:** Angular
- **Backend:** Express.js
- **Database:** MySQL

## Getting Started

Follow these steps to set up and run the Angular Todo App:

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/maiko26/angular-todoapp.git
   cd angular-todoapp
   npm install
   ng serve

## Configuration

Make sure to configure your MySQL database connection details in the `config.js` file.

```js
// config.js
module.exports = {
  db: {
    host: 'your-mysql-host',
    user: 'your-mysql-username',
    password: 'your-mysql-password',
    database: 'your-mysql-database',
  },
  // Other configurations...
};
