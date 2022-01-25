const Manager = require("../lib/Manager");



//  example test
// test("Some test in which you are going to prove", () => {

//  some const value
//  expect(object.objectVar).toBe(testedValue);

// });



// Test all constructors for every variable





// Test  all getter functions 

test("Can set office number via constructor argument", () => {
    const testValue = 100;
    const e = new Manager("Foo", 1, "test@test.com", testValue);
    expect(e.officeNumber).toBe(testValue);
  });
  
  test("getRole() should return \"Manager\"", () => {
    const testValue = "Manager";
    const e = new Manager("Foo", 1, "test@test.com", 100);
    expect(e.getRole()).toBe(testValue);
  });
  
  test("Can get office number via getOffice()", () => {
    const testValue = 100;
    const e = new Manager("Foo", 1, "test@test.com", testValue);
    expect(e.getOfficeNumber()).toBe(testValue);
  });