const Employee = require("../lib/employee")

// Creates the team 
const team = (generate) => {

// Creates the manager card
const createManager = (manager) => {
    return `
    <div class="card employee-card" style="width: 18rem;">
        <div class="card-header">
          <h2 class="card-title">${manager.name}</h2>
          <h3 class="card-title"><i class="fa-solid fa-people-roof"></i>Manager</h3>
        </div>
        <ul class="card-body list-group-flush">
          <li class="list-group-item">ID: ${manager.id}</li>
          <li class="list-group-item">Email: <a href="mailto:${manager.email}"></a>${manager.email}</li>
          <li class="list-group-item">Office number: ${manager.officeNumber}</li>
        </ul>
      </div>
    `
}

// Creates the engineer card(s)
const createEngineers = (engineer) => {
    return `
    <div class="card employee-card" style="width: 18rem;">
        <div class="card-header">
          <h2 class="card-title">${engineer.name}</h2>
          <h3 class="card-title"><i class=""></i>Engineer</h3>
        </div>
        <ul class="card-body list-group-flush">
          <li class="list-group-item">ID: ${engineer.id}</li>
          <li class="list-group-item">Email: <a href="mailto:${engineer.email}"></a>${engineer.email}</li>
          <li class="list-group-item">GitHub: ${engineer.github}</li>
        </ul>
      </div>
    `
}

// Creates the intern card(s)
const createInterns = (intern) => {
    return `
    <div class="card employee-card" style="width: 18rem;">
        <div class="card-header">
          <h2 class="card-title">${intern.name}</h2>
          <h3 class="card-title"><i class=""></i>Intern</h3>
        </div>
        <ul class="card-body list-group-flush">
          <li class="list-group-item">ID: ${intern.id}</li>
          <li class="list-group-item">Email: <a href="mailto:${intern.email}"></a>${intern.email}</li>
          <li class="list-group-item">School: ${intern.school}</li>
        </ul>
      </div>
    `
}

// Creates the team roster page
templateHTML = []
templateHTML.push(generate
    .filter(employee => employee.getRole() === "Manager")
    .map(manager => createManager(manager)))

    templateHTML.push(generate
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => createEngineers(engineer)))
        
    templateHTML.push(generate
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => createInterns(intern)))
        
    return templateHTML.join("")
}

// Adds the team member cards to the html template
module.exports = generate => {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"/>
        <link rel="stylesheet" 
            href="https://kit.fontawesome.com/6f90f15f89.js" crossorigin="anonymous"/>
        <link rel="stylesheet" href="../dist/style.css"/>
        <title>Team Roster</title>
    </head>
    
    <body>
      <header class="container-fluid">
        <div class="row">
          <div class="col-12 jumbotron">
            <h1 class="text-center">My Team</h1>
            <p class="lead text-center">The members below make up my software engineering team.</p>
          </div>
        </div>
      </header>
      <main class="container">
        <div class="row">
          <div class="col-12 d-flex justify-content-center">
          
          <!-- Team Roster Cards -->
            ${team(generate)}
          
    
        </div>
      </main>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    </body>
    </html>`
}