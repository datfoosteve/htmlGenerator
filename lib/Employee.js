// Base Class that will be used to extend other classes. Polymorphic Design
/* The Employee class is a JavaScript class that has three properties:
 name, id, and email. It also
has three methods: getName, getId, and getEmail. GetRole() returns the name*/
class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }

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
    return "Employee";
  }
}



/* The above code is creating a new class called Employee. */
// This exports it so that it can be used in other classes
module.exports = Employee;
