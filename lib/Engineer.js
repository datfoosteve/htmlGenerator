const Employee = require("./Employee");
// Employee is the Base class that will be extended to create Engineer
class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }

  getGithub() {
    return this.github;
  }

  /**
   * Get the role of the person.
   * @returns "Engineer"
   */
  getRole() {
    return "Engineer";
  }
}

module.exports = Engineer;
