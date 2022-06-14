const inquirer = require('inquirer');
const mysql = require('mysql2');
// const helper = require("./helper");
helper = require('./helper');

function viewPrompts() {
  inquirer
    .prompt([
      {
        type: 'list',
        message: 'Choose one of the following:',
        name: 'stack',
        choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department','Add a role','Add an employee', 'Update an employee role'],
      }
    ])
    .then((choice) => {
      switch(choice.stack) {
        case "View all departments":
          viewAllDep();
          break;
        case "View all roles":
          viewAllRoles();
          break;
        case "View all employees":
          viewAllEmps();
          break;
        case "Quit":
          console.log("Goodbye")
          process.exit();
      }
    });
}

viewPrompts();

module.exports = {viewPrompts}