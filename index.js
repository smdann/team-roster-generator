const inquirer = require("inquirer");
const fs = require("fs");

const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");

const teamMembers = [];

const templateHTML = require("./src/template")

// Prompts user for manager information
const createManager = () => {
  console.log("Welcome to the Team Roster Generator!")
  console.log("Use 'npm run reset' to reset the /dist folder.")

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
  .then(managerInfo => {
    const {name, id, email, officeNumber} = managerInfo;
    const manager = new Manager (name, id, email, officeNumber);
    teamMembers.push(manager);
    console.log(manager);
  })
}


// Prompts user for team member type and information
const createEmployee = () => {
  return inquirer.prompt([
    {
      type: "list",
      message: "Which type of team member would you like to add?",
      name: "role",
      choices: ["Engineer", "Intern", "I'm done adding team members."],
    },
    {
      type: "input",
      message: "What is the team member's name?",
      name: "name",
    },
    {
      type: "input",
      message: "What is the team member's ID?",
      name: "id",
    },
    {
      type: "input",
      message: "What is the team member's email?",
      name: "email",
    },
    {
      type: "input",
      message: "What is the team member's GitHub username?",
      name: "github",
      when: (list) => list.role === "Engineer",
    },
    {
      type: "input",
      message: "What school does the team member attend?",
      name: "school",
      when: (list) => list.role === "Intern",
    },
    {
      type: "confirm",
      message: "Would you like to add more team members?",
      name: "addMoreEmployees",
      default: false
    }
  ])

  .then(employeeInfo => {
    let{name, id, email, role, github, school, addMoreEmployees} = employeeInfo;
    let employee;

    if (role === "Engineer") {
      employee = new Engineer (name, id, email, github);
      console.log(employee);
    } else if (role === "Intern") {
      employee = new Intern (name, id, email, school);
      console.log(employee);
    }
    teamMembers.push(employee);

    if (addMoreEmployees) {
      return createEmployee(teamMembers);
    } else {
      return teamMembers;
    }
  })
}

const writeFile = htmlFileContent => {
  fs.writeFile("./dist/index.html", htmlFileContent, err => {
    err ? console.log(err) : console.log("Your team roster has been generated!")
  })
};

createManager()
  .then(createEmployee)
  .then(teamMembers => {
    return templateHTML(teamMembers);
  })
  .then(rosterHTML => {
    return writeFile(rosterHTML);
  })
  .catch(err => {
    console.log(err);
  });
  
