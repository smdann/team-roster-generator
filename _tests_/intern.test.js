const Intern = require("../lib/intern");

describe("Intern", () => {
  describe("Intern Object", () => {
    it("should create an intern object", () => {
      const intern = new Intern("Sally", 4, "sally@test.com", "U of M");

      expect(intern.school).toEqual("U of M");
    });

    describe("getSchool", () => {
      it("should get the intern's school", () => {
        const intern = new Intern("Sally", 4, "sally@test.com", "U of M");
  
        expect(intern.getSchool()).toEqual("U of M");
      })
    });

    describe("getRole", () => {
      it("should get the intern's role", () => {
        const intern = new Intern("Sally", 4, "sally@test.com", "U of M");
  
        expect(intern.getRole()).toEqual("Intern");
      })
    });

  });
})