const inquirer = require('inquirer');
const fs = require('fs');

const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

const teamMembers = [];

// Prompts user for manager information
const createManager = () => {
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

createManager()

// Prompts user for team member type and information
const createEmployee = () => {
  return inquirer.prompt([
    {
      type: "list",
      message: "Which type of team member would you like to add?",
      name: "role",
      choices: [Engineer, Intern, "I'm done adding team members."],
    },
    {

    }
  ])
}



  // prefix on separate line?
  // prefix: "Welcome to the Team Roster Generator! Use 'npm run reset' to reset the /dist folder."