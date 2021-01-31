const inquirer = require("inquirer");
const server = require("./server")

const firstQuestions = [
  {
    type: "list",
    name: "questions",
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
      "Exit"
    ],
  },
];
// inquirer.prompt(firstQuestions)
const addDepartment =()=>{}
const addRole =()=>{}
const addEmployee =()=>{}
const viewDepartments =()=>{}
const viewRoles =()=>{}
const viewEmployees =()=>{}
const viewBudget =()=>{}
const updateRole =()=>{}

const init = () => inquirer.prompt(firstQuestions).then((response) => {
    switch (response.firstQuestions) {
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
            return;
    }
})
init();