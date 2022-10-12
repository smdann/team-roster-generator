const Employee = require("../lib/employee");

describe("Employee", () => {
  describe("name", () => {
    it("should create an object with name, id, and email", () => {
      const employee = new Employee("Shannon", 1, "sdann@test.com");

      expect(employee.name).toEqual(expect.any(String));
      expect(employee.id).toEqual(expect.any(Number));
      expect(employee.email).toEqual(expect.any(String));
    });

  describe("getName", () => {
    it("should get the employee's name", () => {
      const employee = new Employee("Shannon", 1, "sdann@test.com");

      expect(employee.getName()).toEqual(expect.any(String));
    })
  });

  describe("getId", () => {
    it("should get the employee's id", () => {
      const employee = new Employee("Shannon", 1, "sdann@test.com");

      expect(employee.getId()).toEqual(expect.any(Number));
    })
  });

  describe("getEmail", () => {
    it("should get the employee's email", () => {
      const employee = new Employee("Shannon", 1, "sdann@test.com");

      expect(employee.getEmail()).toEqual(expect.any(String));
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