const inquirer = require('inquirer');
const helper = require('./helper');
const mysql = require('mysql2');

const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: 'dontcare',
    database: 'staff_db'
  },
  console.log(`Connected to the staff_db database.`)
);

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
          viewDepartments();
          break;
        case "View all roles":
          viewRoles();
          break;
        case "View all employees":
          viewEmps();
          break;
        case "Add a department":
          addDepartment();
          break;
        case "Add a role":
          addRoles();
          break;
        case "Add an employee":
          addEmps();
          break;
        case "Update an employee role":
          updateEmps();
          break;
        case "Quit":
          console.log("Goodbye")
          process.exit();
      }
    });
}

function viewDepartments(){
  console.log("viewDepartments()");
  helper.viewAllDep((result)=>{
    console.table(result)
    viewPrompts();
  })
}

function viewRoles(){
  console.log("viewRoles()");
  helper.viewAllRoles((result)=>{
    console.table(result)
    viewPrompts();
  })
}

function viewEmps(){
  console.log("viewEmps()");
  helper.viewAllEmps((result)=>{
    console.table(result)
    viewPrompts();
  })
}

// function addDepartment(){
//   console.log("viewDepartments()");
//   helper.addDep((result)=>{
//     console.table(result)
//     viewPrompts();
//   })
// }

// function addRoles(){
//   console.log("viewRoles()");
//   helper.addRoles((result)=>{
//     console.table(result)
//     viewPrompts();
//   })
// }

// function addEmps(){
//   console.log("viewEmps()");
//   helper.addEmps((result)=>{
//     console.table(result)
//     viewPrompts();
//   })
// }

// function updateEmps(){
//   console.log("viewEmps()");
//   helper.updateEmps((result)=>{
//     console.table(result)
//     viewPrompts();
//   })
// }

const addDepartment =() => {
  inquirer
    .prompt([
      {
        type:"input",
        message:"What is the new department name?",
        name: "department"

      }
    ])
    .then((data) => {
      const {department} = data;
      db.query(`INSERT INTO departments (dep_name) VALUES ("${department}")`),
        (err) => {
          if (err) throw err;
          console.log(`congrats! you have added ${department}!`)
        }
      viewPrompts();
    })
};

function addRoles(){
  console.log("viewRoles()");
  helper.addRoles((result)=>{
    console.table(result)
    viewPrompts();
  })
}

function addEmps(){
  console.log("viewEmps()");
  helper.addEmps((result)=>{
    console.table(result)
    viewPrompts();
  })
}

function updateEmps(){
  console.log("viewEmps()");
  helper.updateEmps((result)=>{
    console.table(result)
    viewPrompts();
  })
}

viewPrompts();

module.exports = {viewPrompts}