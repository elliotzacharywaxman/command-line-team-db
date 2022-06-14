// Import and require mysql2
const mysql = require('mysql2');
const { viewPrompts } = require('./index');


const PORT = process.env.PORT || 3001;

// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: 'dontcare',
    database: 'staff_db'
  },
  console.log(`Connected to the staff_db database.`)
);

function viewAllDep() {
  db.query(`SELECT * FROM departments;`, (err, result) => {
    if (err) {
      console.log(err);
    }
    console.log(result)
    viewPrompts()
  });
}

function viewAllRoles() {
  db.query(`SELECT * FROM staff_roles;`, (err, result) => {
    if (err) {
      console.log(err);
    }
    console.log(result)
    viewPrompts()
  });
}

function viewAllEmps() {
  db.query(`SELECT * FROM employees;`, (err, result) => {
    if (err) {
      console.log(err);
    }
    console.log(result)
    viewPrompts()
  });
}


module.exports = {
  viewAllDep,
  viewAllRoles,
  viewAllEmps
}