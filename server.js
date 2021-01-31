// Dependencies
var express = require("express");
var mysql = require("mysql");
var inquirer = require("inquirer");

// Creates instance of express app.
var app = express();

// Sets the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

// MySQL DB Connection Information
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "MESSIneymar10_",
  database: "employee_db",
});

// Initiates MySQL Connection.
connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
  }
  init();
  console.log("connected as id " + connection.threadId);
});

// prompts
const firstQuestions = [
  {
    name: "action",
    type: "list",
    message: "Welcome to the Employee Tracker! What would you like to do?",
    choices: [
      "Add a new Department",
      "Add a new Role",
      "Add a new Employee",
      "View all Departments",
      "View all Roles",
      "View all Employees",
      "View Total Budget",
      "Update Roles",
      "Exit",
    ],
  },
];

// inquirer.prompt(firstQuestions)

const init = () =>
  inquirer.prompt(firstQuestions).then(function (response) {
    switch (response.action) {
      case "Add a new Department":
        addDepartment();
        break;
      case "Add a new Role":
        addRole();
        break;
      case "Add a new Employee":
        addEmployee();
        break;
      case "View all Departments":
        viewDepartments();
        break;
      case "View all Roles":
        viewRoles();
        break;
      case "View all Employees":
        viewEmployees();
        break;
      case "View Total Budget":
        viewBudget();
        break;
      case "Update Roles":
        updateRole();
        break;
      case "Exit":
        console.log("Thank you for using the Employee Tracker. Goodbye!")
        break;
    }
  });

const viewDepartments = () => {
  connection.query("SELECT * FROM department", 
    init(),
    function (err, res) {
    if (err) throw err;
    console.table(res);
    connection.end();
  });
};
const viewRoles = () => {
  connection.query("SELECT * FROM role", 
    init(),
    function (err, res) {
    if (err) throw err;
    console.table(res);
    connection.end();
  });
};
const viewEmployees = () => {
  connection.query("SELECT * FROM employee", 
    init(),
    function (err, res) {
    if (err) throw err;
    console.table(res);
    connection.end();
  });
};
const viewBudget = () => {
  connection.query("SELECT SUM (salary) FROM role",
    init(), 
    function (err, res) {
    if (err) throw err;
    console.table(res);
    connection.end();
  });
};
const addDepartment = () => {
    inquirer
      .prompt({
        name: "name",
        type: "input",
        message: "Please enter name of the department",
      })
      .then(function (response) {
        connection.query(
          "INSERT INTO department SET ?",
          { name: response.name },
          console.log(response.name + " has been added as a new Department. View all departments"),
          init(),
          function (err, res) {
            if (err) throw err;
            connection.end();
          }
        );
      });
  };
  const addRole = () => {
    inquirer
      .prompt([
        {
          name: "title",
          type: "input",
          message: "Please enter title of the role",
        },
        {
          name: "salary",
          type: "input",
          message: "Please enter the salary amount",
        },
        {
          name: "department_id",
          type: "input",
          message: "Please enter the department id number",
        },
      ])
      .then((response) => {
        connection.query(
          "INSERT INTO role SET ?",
          {
            title: response.title,
            salary: response.salary,
            department_id: response.department_id,
          },
          console.log(response.title +" has been added as a new Role. View all Roles"),
          init(),
          function (err, res) {
            if (err) throw err;
            connection.end();
          }
        );
      });
  };
  
  const addEmployee = () => {
    inquirer
      .prompt([
        {
          name: "first_name",
          type: "input",
          message: "Please enter the employee's first name",
        },
        {
          name: "last_name",
          type: "input",
          message: "Please enter the employee's last name",
        },
        {
          name: "role_id",
          type: "input",
          message: "Please enter the role id number",
        },
      ])
      .then((response) => {
        connection.query(
          "INSERT INTO employee SET ?",
          {
            first_name: response.first_name,
            last_name: response.last_name,
            role_id: response.role_id,
          },
          console.log(response.first_name+" "+response.last_name+" has been added as a new Employee. View all Employees"),
          init(),
          function (err, res) {
            if (err) throw err;
            connection.end();
          }
        );
      });
  };
const updateRole = () => {};

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function () {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
