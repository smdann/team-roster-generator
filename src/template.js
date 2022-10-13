// Create the team

// Create the manager Card
const createManager = (manager) => {
    return `
    <div class="card employee-card" style="width: 18rem;">
        <div class="card-header">
          <h2 class="card-title">${manager.name}</h2>
          <h3 class="card-title"><i class=""></i>Manager</h3>
        </div>
        <ul class="card-body list-group-flush">
          <li class="list-group-item">ID: ${manager.id}</li>
          <li class="list-group-item">Email: <a href="mailto:${manager.email}"></a>${manager.email}</li>
          <li class="list-group-item">Office number: ${manager.officeNumber}</li>
        </ul>
      </div>
    `
}


// Create the engineer card(s)
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

// Create the intern card(s)
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
