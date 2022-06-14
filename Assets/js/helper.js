// Import and require mysql2
const mysql = require('mysql2');
const inquirer = require('inquirer');

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

// Viewing all departments
function viewAllDep(cb) {
  return db.query(`SELECT * FROM departments;`, (err, result) => {
    console.table(result)
    cb(result)
  });
}

// Viewing all roles
function viewAllRoles(cb) {
  return db.query(`SELECT * FROM staff_roles;`, (err, result) => {
    cb(result)
  });
}

// Viewing all Employees
function viewAllEmps(cb) {
  return db.query(`SELECT * FROM employees;`, (err, result) => {
    cb(result)
  });
}

// Add a department
async function addDep(cb) {
  userInput()
  const dep = await db.query(`INSERT INTO departments (dep_name) VALUES ("Ethics");`)
    return db.query(`SELECT * FROM departments;`, (err, result) => {
      cb(result)
    });
}

// Add a role
function addRoles(cb) {
  return db.query(`SELECT * FROM staff_roles;`, (err, result) => {
    cb(result)
  });
}

// Add an employee 
function addEmps(cb) {
  return db.query(`SELECT * FROM employees;`, (err, result) => {
    cb(result)
  });
}

// Update an employee role
function updateEmps(cb) {
  return db.query(`SELECT * FROM employees;`, (err, result) => {
    cb(result)
  });
}

function userInput(){
  inquirer
    .prompt([
      {
        type: 'input',
        message: 'What would you like to add?',
        name: 'userInput',
      }
    ])
    .then((input) => {
      console.log(input)
    });
}

module.exports = {
  viewAllDep,
  viewAllRoles,
  viewAllEmps,
  addDep,
  addRoles,
  addEmps,
  updateEmps
}