const Employee = require("../lib/employee");

describe("Employee", () => {
  describe("Employee Object", () => {
    it("should create an object with name, id, and email", () => {
      const employee = new Employee("Shannon", 1, "sdann@test.com");

      expect(employee.name).toEqual("Shannon");
      expect(employee.id).toEqual(1);
      expect(employee.email).toEqual("sdann@test.com");
    });

  describe("getName", () => {
    it("should get the employee's name", () => {
      const employee = new Employee("Shannon", 1, "sdann@test.com");

      expect(employee.getName()).toEqual("Shannon");
    })
  });

  describe("getId", () => {
    it("should get the employee's id", () => {
      const employee = new Employee("Shannon", 1, "sdann@test.com");

      expect(employee.getId()).toEqual(1);
    })
  });

  describe("getEmail", () => {
    it("should get the employee's email", () => {
      const employee = new Employee("Shannon", 1, "sdann@test.com");

      expect(employee.getEmail()).toEqual("sdann@test.com");
    })
  });

  describe("getRole", () => {
    it("should get the employee's role", () => {
      const employee = new Employee("Shannon", 1, "sdann@test.com");

      expect(employee.getRole()).toEqual("Employee");
    })
  });

  });
})