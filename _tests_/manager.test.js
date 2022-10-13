const Manager = require("../lib/manager");

describe("Manager", () => {
  describe("name", () => {
    it("should create a manager object", () => {
      const manager = new Manager("Mary", 3, "mary@test.com", 105);

      expect(manager.officeNumber).toEqual(105);
    });

    describe("getRole", () => {
      it("should get the manager's role", () => {
        const manager = new Manager("Mary", 3, "mary@test.com", 105);
  
        expect(manager.getRole()).toEqual("Manager");
      })
    });

    // get office number

    // Arrange, Act, Assert

  });
})