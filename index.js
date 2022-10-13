// Required packages / file paths
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const templateHTML = require("./src/template");

// Team members array
const teamMembers = [];

// Prompts user for manager information
const createManager = () => {
  console.log("Welcome to the Team Roster Generator!");
  console.log("Use 'npm run reset' to reset the /dist folder.");

  return inquirer.prompt([
    {
      type: "input",
      message: "What is the team manager's name?",
      name: "name",
    },
    {
      type: "input",
      message: "What is the team manager's id?",
      name: "id",
    },
    {
      type: "input",
      message: "What is the team manager's email?",
      name: "email",
    },
    {
      type: "input",
      message: "What is the team manager's office number?",
      name: "officeNumber",
    }
  ])
  // Creates new manager, adds to team members array, & starts createEmployee function
  .then(managerInfo => {
    const {name, id, email, officeNumber} = managerInfo;
    const manager = new Manager (name, id, email, officeNumber);
    teamMembers.push(manager);
    console.log(manager);
    createEmployee()
  })
};

// Prompts user for team member type
const createEmployee = () => {
  return inquirer.prompt([
    {
      type: "list",
      message: "Which type of team member would you like to add?",
      name: "role",
      choices: ["Engineer", "Intern", "I'm done adding team members."],
    },
  ])
  // Performs switch based on role selected and starts appropriate function
  .then(employeeInfo => {
    switch(employeeInfo.role){
      case "Engineer":
        createEngineer()
        break;

      case "Intern":
        createIntern()
        break;

      default:
        writeFile()
    }
  })
};

// Prompts for creating an engineer
const createEngineer = () => {
  inquirer.prompt([
    {
      type: "input",
      message: "What is the Engineer's name?",
      name: "engineerName",
    },
    {
      type: "input",
      message: "What is the Engineer's ID?",
      name: "id",
    },
    {
      type: "input",
      message: "What is the Engineer's email?",
      name: "email",
    },
    {
      type: "input",
      message: "What is the Engineer's GitHub username?",
      name: "github",
    }
  ]) 
  // Creates new engineer & adds to team members array
  .then((answers) => {
    const engineer = new Engineer (answers.engineerName, answers.id, answers.email, answers.github);
    teamMembers.push(engineer);
    console.log(engineer);
    createEmployee()
  })
};

// Prompts for creating an intern
const createIntern = () => {
  inquirer.prompt([
    {
      type: "input",
      message: "What is the Intern's name?",
      name: "internName",
    },
    {
      type: "input",
      message: "What is the Intern's ID?",
      name: "id",
    },
    {
      type: "input",
      message: "What is the Intern's email?",
      name: "email",
    },
    {
      type: "input",
      message: "What is the Intern's school?",
      name: "school",
    }
  ]) 
  // Creates new intern & adds to team members array
  .then((answers) => {
    const intern = new Intern (answers.internName, answers.id, answers.email, answers.school);
    teamMembers.push(intern);
    console.log(intern);
    createEmployee()
  })
};

// Writes the team members array to an index.html file
const writeFile = () => {
  fs.writeFile("./dist/index.html", templateHTML(teamMembers), err => {
    err ? console.log(err) : console.log("Your team roster has been generated in ./dist!")
  })
};

// Initiates the user prompts for creating a manager
createManager()

  
