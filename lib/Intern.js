const Employee = require('./Employee')
// Employee is the Base class that will be extended to create Intern
class Intern extends Employee{

constructor(name, id, email, school){
super (name, id, email);
this.school = school
}

getSchool(){
    return school
}

getRole(){
    
    return 'Engineer';
}











}

module.exports = Intern;