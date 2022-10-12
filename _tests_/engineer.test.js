const Engineer = require("../lib/engineer");

describe("Engineer", () => {
  describe("name", () => {
    it("should create an engineer object", () => {
      const engineer = new Engineer("Bob", 2, "bob@test.com", "bob123");

      expect(engineer.github).toEqual("bob123");
    });

    describe("getGithub", () => {
      it("should get the engineer's github", () => {
        const engineer = new Engineer("Bob", 2, "bob@test.com", "bob123");
  
        expect(engineer.getGithub()).toEqual("bob123");
      })
    });

    describe("getRole", () => {
      it("should get the engineer's role", () => {
        const engineer = new Engineer("Bob", 2, "bob@test.com", "bob123");
  
        expect(engineer.getRole()).toEqual("Engineer");
      })
    });

  });
})