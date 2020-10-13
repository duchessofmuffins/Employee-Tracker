var mysql = require("mysql");
var inquirer = require("inquirer");
const { title } = require("process");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "Homework12_db"
});

connection.connect(function(err) {
  if (err) throw err;
  runSearch();
});

// Make 3 tables department, role, employee - SEE EMPLOYEESSEED.SQL

// In Department put id and name
// In Role put id, title, salary, and department id
// In Employee put id, first_name, last_name, role_id, manager_id



// Create the following commands

function runSearch() {
  inquirer
    .prompt({
      name: "action",
      type: "list",
      message: "Select an action",
      choices: [
        "Add departments",
        "Add roles",
        "Add employees",
        "View departments",
        "View roles",
        "View employees",
        "Update employee roles",
        "Update employee managers",
        "View employees by managers",
        "Delete departments",
        "Delete roles",
        "Delete employees",
        "View combined salaries by department",
        "EXIT"
      ]
    })
    .then(function(answer){
      switch (answer.action) {
        case "Add departments":
          addDepartments();
          break;
        
        case "Add roles":
          addRoles();
          break;
        
        case "Add employees":
          addEmployees();
          break;
        
        case "View departments":
          viewDepartments();
          break;
        
        case "View roles":
          viewRoles();
          break;
        
        case "View employees":
          viewEmployees();
          break;
        
        case "Update employee roles":
          updateRoles();
          break;
        
        case "Update employee managers":
          updateManagers();
          break;
        
        case "View employees by managers":
          viewByManagers();
          break;
        
        case "Delete departments":
          deleteDepartments();
          break;
        
        case "Delete roles":
          deleteRoles();
          break;
        
        case "Delete employees":
          deleteEmployees();
          break;

        case "View combined salaries by department":
          viewDepartmentSalaries();
          break;

        case "EXIT":
          connection.end();
          break;
      }
    });
  }
    

    // Create associated functions

    function addDepartments() {
      inquirer
      .prompt([
        {
          name: "department",
          type: "input",
          message: "What departmet do you want to add?"
        }])
      .then(function(answer){
        connection.query(
          "INSERT INTO Departments SET ?",
          {
            name: answer.department
          },
          function(err) {
            if (err) throw err;
            console.log("Your department was created succesfully!");
            runSearch();
          }
        );
      });
    };    

    function addRoles() {
      inquirer
      .prompt([
        {
          name: "role",
          type: "input",
          message: "What role do you want to add?"
        },
        {
          name: "salary",
          type: "input",
          message: "What is the starting salary?"
        }])
      .then(function(answer){
        connection.query(
          "INSERT INTO Roles SET ?",
          {
            title: answer.role,
            salary: answer.salary
          },
          function(err) {
            if (err) throw err;
            console.log("Your role was created succesfully!");
            runSearch();
          }
        );
      });
    };


    function addEmployees() {
      console.log (roles.title),
      inquirer
      .prompt([
        {
          name: "employeeFirst",
          type: "input",
          message: "What is the new employee's FIRST name?"
        },
        {
          name: "employeeLast",
          type: "input",
          message: "What is the new employee's LAST name?"
        },
        {
          name: "employeeRole",
          type: "list",
          message: "What is the new employee's role?",
          choices: [title]
        }])
      .then(function(answer){
        connection.query(
          "INSERT INTO Employees SET ?",
          {
            first_name: answer.employeeFirst,
            last_name: answer.employeeLast,
            role_id: answer.employeeRole
          },
          function(err) {
            if (err) throw err;
            console.log("Your employee was added succesfully!");
            runSearch();
          }
        );
      });
    };


    function viewDepartments() {
      console.table(Departments[name])
        // no need to inquire because this is meant to LIST all Departments (see top5000)
    };

    function viewRoles() {
      console.log(first_name, last_name)
        // no need to inquire because this is meant to LIST all Roles (see top5000)
    };

    function viewEmployees() {
        // no need to inquire because this is meant to LIST all Employees (see top5000)
    };

    function updateRoles() {
        // inquire which role needs updating
        // have user reenter all info??
        // run add function?
    };

    function updateManagers() {
        // inquire which Manager needs updating
        // have user reenter all info??
        // run add function?
    };

    function viewByManagers() {
        // search function (see top5000 for narrowing down search requests)
    };

    function deleteDepartments() {
        // inquire which object needs deleting
        // run delete function for that object
        const titlearray = [];
        
        inquirer
        .prompt([
          {
            name: "department",
            type: "input",
            message: "What department do you want to delete?",
            choices: ""
          }])
        .then(function(answer){
          connection.query(
            "DELETE FROM Departments SET ?",
            {
              name: answer.department
            },
            function(err) {
              if (err) throw err;
              console.log("Your department was deleted succesfully!");
              runSearch();
            }
          );
        });
      
    };

    function deleteRoles() {
        // inquire which object needs deleting
        // run delete function for that object
    };

    function deleteEmployees() {
        // inquire which object needs deleting
        // run delete function for that object
    };

    function viewDepartmentSalaries() {
    }