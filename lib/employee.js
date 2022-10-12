class Employee {
  name;
  id;
  email;

  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }
  // Returns data from user input
  getName() {
    return this.name;
  }
  getId() {
    return this.id;
  }
  getEmail() {
    return this.email;
  }
  getRole() {
    return 'Employee';
  }
}

module.exports = Employee;