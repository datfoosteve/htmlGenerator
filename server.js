// const genHTML = require("./src/htmlGen");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");

const inquirer = require("inquirer");
const fs = require("fs");

//Create team array
const teamArray = [];
const htmlArray = [];

// Async because while page loads up we can not have to wait on prompts(userInput), it is generally awaited
const initTeamMember = (htmlArray) => {
  console.log("Add a team member!");
  inquirer//conditional to route the prompts for whether what employee type they are
    .prompt([
      {
        type: "list",
        name: "role",
        message: "What will the team member's role be?:",
        choices: ["Manager", "Engineer", "Intern"],
      },
      {
        // these ask the general questions that every employee has
        type: "input",
        name: "name",
        message: (employeeInput) => `Enter ${employeeInput.role}'s name:`,
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter the employee's name!");
            return false;
          }
        },
      },
      {
        type: "number",
        name: "id",
        message: (employeeInput) => `Enter ${employeeInput.role}'s id:`,
        validate: (numInput) => {
          if (numInput) {
            return true;
          } else {
            console.log("Please enter employee id");
            return false;
          }
        },
      },
      {
        // tagged template literal `placeholders` allow dynamic variability in these strings
        type: "input",
        name: "email",
        message: (employeeInput) => `Enter ${employeeInput.role}'s email:`,
        validate: (email) => {
          valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
          if (valid) {
            return true;
          } else {
            console.log("Please enter valid email!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "github",
        message: (employeeInput) =>
          `Enter ${employeeInput.role}'s github username:`,
        when: (input) => input.role === "Engineer",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter a valid github username!");
            return false;
          }
        },
      },
      {
        type: 'input',
        name: 'officeNumber',
        message: "What is the manager's office number?",
        when: (input) => input.role === "Manager",
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter the manager's office number!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "school",
        message: "Enter intern's school name:",
        when: (input) => input.role === "Intern",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter a valid school name");
            return false;
          }
        },
      },
      {
        type: "confirm",
        name: "moreMembers",
        message: "Would you like to add another team member?",
        default: false,
      },
    ])
    .then((employeeInput) => {
      const { name, id, email, role, github, school, officeNumber,moreMembers } =
        employeeInput;

      let newbie;

      if (role === "Manager") {
        newbie = new Manager(name, id, email, officeNumber);
      } else if (role === "Engineer") {
        newbie = new Engineer(name, id, email, github);
      } else if (role === "Intern") {
        newbie = new Intern(name, id, email, school);
      } else {console.log("Error: Newbie did not get trained")}
     
      console.log("Success: Newbie evolved into TeamMember!");
      teamArray.push(newbie);
      
      // The function, bodyofHTML is called inside InitTeamMember because 
      // my functions being invoked one after another, and body is only
      // invoked with information depending if the user still wants to create
      // more TeamMembers. Only until all the information for how many team members are given, then
      // we invoke the TailHTML;

      if (moreMembers) {
        return initTeamMember(teamArray);
      } else {
        tailHTML(htmlArray);
      }
    });
};

function headOfHTML(htmlArray){
  const headNode = `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"><script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script><script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script><title>teamHtmlGenerator</title><nav class="navbar navbar-dark bg-dark mb-5"><span class="navbar-brand mb-0 h1 w-100 text-center">Generated Profile</span></nav></head><body><div class="container">`;
  htmlArray.push(headNode);
  // fs.writeFile("./dist/index.html", headNode, function (err) {
  //   if (err) {
  //     console.log("Process:headOfHTML() = Fail")
  //     console.log(err);
  //   }
  //   else{
  //     console.log("Process:headOfHTML() = Success");
  //     console.clear();
  //   }
  // });
}

function bodyofHTML(member, htmlArray) {
  return new Promise(function (resolve, reject) {
    const name = member.getName();
    const role = member.getRole();
    const id = member.getId();
    const email = member.getEmail();
    let information = "";

    if (role === "Manager") {
      const officeNumber = member.getOfficeNumber();
      information = `<div class="row"><div class="col-6">
          <div class="card mx-auto mb-3" style="width: 18rem">
          <h5 class="card-heading">${name}<br /><br />${role}</h5>
          <div class="card-body">
          <ul class="list-group list-group-flush">
              <li class="list-group-item">ID:${id}</li>
              <li class="list-group-item">Email Address: ${email}</li>
              <li class="list-group-item">Office Phone: ${officeNumber}</li> </
          </ul>
          </div></div></div>`;
    } else if (role === "Engineer") {
      const gitHub = member.getGit();
      information = `<div class="row"><div class="col-6">
            <div class="card mx-auto mb-3" style="width: 18rem">
            <h5 class="card-heading">${name}<br /><br />${roll}</h5>
            <div class="card-body">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID:${id}</li>
                <li class="list-group-item">Email Address: ${email}</li>
                <li class="list-group-item">Office Phone: ${office}</li> </
            </ul>
            </div></div></div>`;
    } else if (role === "Intern") {
      const school = member.getSchool();
      information = `<div class="row"><div class="col-6">
              <div class="card mx-auto mb-3" style="width: 18rem">
              <h5 class="card-heading">${name}<br /><br />${role}</h5>
              <div class="card-body">
              <ul class="list-group list-group-flush">
                  <li class="list-group-item">ID:${id}</li>
                  <li class="list-group-item">Email Address: ${email}</li>
                  <li class="list-group-item">School: ${school}</li> </
              </ul>
              </div></div></div>`;
    }

    console.log("All Info Gathered For Team Member ");
  // fs.writeFile("./dist/index.html", information, function (err) {
  //   if (err) {
  //     console.log("Process:appendfileSync = rejected")
  //     return reject(err);
  //   }
  //   return resolve();
  // });
  htmlArray.push(information);
  });
}

function tailHTML(htmlArray){
  const html = ` </div></div></body></html>`;
  htmlArray.push(html);
  fs.writeFile("./dist/index.html", JSON.stringify(htmlArray), function (err) {
    if (err) {
      console.log("Process:tailHTML() = Fail")
      console.log(err);
    }
    else{
      console.log("Process:tailHTML() = Success")
    }
  });
  console.log("Inquiry Complete!");
}

// These are the only functions that are called in the beginnning, because
// the head of the html page only needs to be called once, and the tail, which is called
// during the end of the bodyHTML function is made sure that its called once as well. 
// Since we are dynamically changing the body depending on team member count, most of the work gets done
// there.

headOfHTML(htmlArray);

initTeamMember(htmlArray);
