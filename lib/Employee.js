
// Base Class that will be used to extend other classes. Polymorphic Design
class Employee{

    constructor(name,id,email){

        this.name = name;
        this.id = id;
        this.email = email;

    }

getName(){
    return this.name;


}


getId(){

    return this.Id;

}



getEmail(){

return this.email;

}


getRole(){

    return 'Employee';


}



}

//exporting out
module.exports = Employee;