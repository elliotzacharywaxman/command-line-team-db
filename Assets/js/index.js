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

const addRoles = () => {
  inquirer
    .prompt([
      {
        type:"input",
        message:"What is associated department ID of the new role?",
        name: "department_id"
      },
      {
        type:"input",
        message:"What is the new role name?",
        name: "role"
      },
      {
        type:"input",
        message:"What is the salary of the new role?",
        name: "salary"
      }
    ])
    .then((data) => {
      const {department_id,role,salary} = data;
      db.query(`INSERT INTO staff_roles (department_id,title,salary) VALUES (${department_id},"${role}",${salary})`),
        (err) => {
          if (err) throw err;
          console.log(`congrats! you have added the role!\nTitle: ${role} \n Department ID: ${department} \nSalary: ${salary}`)
        }
      viewPrompts();
    })
};

const addEmps = () => {
  inquirer
    .prompt([
      {
        type:"input",
        message:"What is the new employees first name?",
        name: "emp_first_name"
      },
      {
        type:"input",
        message:"What is the new employees last name?",
        name: "emp_last_name"
      },
      {
        type:"input",
        message:"What is the ID associated with the new employees role?",
        name: "emp_role_id"
      }
    ])
    .then((data) => {
      const {emp_first_name,emp_last_name,emp_role_id} = data;
      db.query(`INSERT INTO employees (emp_first_name, emp_last_name, emp_role_id) VALUES ("${emp_first_name}","${emp_last_name}",${emp_role_id});`),
        (err) => {
          if (err) throw err;
        }
      console.log(`congrats! you have added the employee!`)
      viewPrompts();
    })
};

// const updateEmps = () => {
//   inquirer
//     .prompt([
//       {
//         type:"input",
//         message:"What is the new employees first name?",
//         name: "emp_first_name"
//       },
//       {
//         type:"input",
//         message:"What is the new employees last name?",
//         name: "emp_last_name"
//       },
//       {
//         type:"input",
//         message:"What is the ID associated with the employees new role?",
//         name: "emp_role_id"
//       }
//     ])
//     .then((data) => {
//       const {emp_first_name,emp_last_name,emp_role_id} = data;
//       db.query(`UPDATE employees SET emp_role_id = ${emp_role_id} WHERE emp_first_name = ${emp_first_name};`),
//         (err) => {
//           if (err) throw err;
//         }
//       console.log(`congrats! you have update the employees role!`)
//       viewPrompts();
//     })
// };

viewPrompts();

module.exports = {viewPrompts}