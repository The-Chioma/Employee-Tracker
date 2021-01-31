const inquirer = require("inquirer");

const questions = [
    {
        type: "list",
        name: "answer",
        message: "Welcome to the Employee Tracker! What would you like to do?",
        choices: [
            {
                name: "Add a new Department",
                value: "add_department",
            },
            {
                name: "Add a new Role",
                value: "add_role",
            },
            {
                name: "Add a new Employee",
                value: "add_employee",
            },
            {
                name: "View all Departments",
                value: "view_department",
            },
            {
                name: "View all Roles",
                value: "view_roles",
            },
            {
                name: "View all Employees",
                value: "view_employees"
            }
        ],
    },
]

inquirer.prompt(questions)
