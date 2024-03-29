// const genHTML = require("./src/htmlGen");

const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");

const inquirer = require("inquirer");
const fs = require("fs");
// var heavyAudio = new Audio("https://wiki.teamfortress.com/w/images/a/a7/Heavy_specialcompleted-assistedkill01.wav");
// heavyAudio.addEventListener('loadeddata', () => {
//   let duration = heavyAudio.duration;
// });

// /* Creating an audio object and setting it to a variable. */
// var scoutAudio = new Audio("https://wiki.teamfortress.com/w/images/0/02/Scout_taunt_conga_fun_12.wav");
// scoutAudio.addEventListener('loadeddata', () => {
//   let duration = scoutAudio.duration;
// });

// var engineerAudio = new Audio("https://wiki.teamfortress.com/w/images/8/84/Eng_aerobic_71.mp3");
// engineerAudio.addEventListener('loadeddata', () => {
//   let duration = engineerAudio.duration;
// });

//Create team array
const teamArray = [Engineer, Manager, Intern];

// Async process to seperate user input from page load
const initTeamMember = async() => {
  console.log("Add a team member!");
  inquirer.prompt([
      {
        type: "list",
        name: "role",
        message: "What will the team member's role be?:",
        choices: ["Manager", "Engineer", "Intern"],
      },
      {
        // these ask the general questions that every employee class has
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
        message: (employeeInput) => `Enter ${employeeInput.name}'s id:`,
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
        message: (employeeInput) => `Enter ${employeeInput.name}'s email:`,
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
          `Enter ${employeeInput.name}'s github username:`,
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
        message: (employeeInput) =>
          `Enter ${employeeInput.name}'s office number:`,
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
        message: (employeeInput) =>
        `Enter ${employeeInput.name}'s school name:`,
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
      let { name, id, email, role, github, school, officeNumber,moreMembers } =
        employeeInput;
      let newbie;
      if (role === "Manager") {
        console.log("Process: Newbie is training to become Manager!");
        newbie = new Manager(name, id, email, officeNumber);
      } else if (role === "Engineer") {
        console.log("Process: Newbie is training to become Engineer!");
        newbie = new Engineer(name, id, email, github);
      } else if (role === "Intern") {
        console.log("Process: Newbie is training to become Intern!");
        newbie = new Intern(name, id, email, school);
      } else {console.log("Error: Newbie had upset stomach and did not get trained")}
     
      console.log(`Success: Newbie evolved into an ${role}!!!`);
      teamArray.push(newbie);
      
      bodyofHTML(newbie);
      if (moreMembers) {
        return initTeamMember(teamArray);
      } else {
        tailHTML();
      }
    });
};

function headOfHTML(){
  const headNode = `<!DOCTYPE html><html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
      <link rel="stylesheet" href="./assets/style.css">
      <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
      <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
      </head>
      <header>
      <title>teamHtmlGenerator</title><nav class="navbar navbar-dark bg-dark mb-5">
      <span class="navbar-brand mb-0 h1 w-100 text-center">Team Fortre-File Generator</span>
  </nav>
  </header>
  <main>
  <body><div class="jumbotron jumbotron-fluid"><div class="container"><div class="justify-content-center align-items-center d-flex">`;
  fs.writeFileSync("./dist/index.html", headNode);
}

function bodyofHTML(member) {
  return new Promise(function (resolve, reject) {
    const name = member.getName();
    const role = member.getRole();
    const id = member.getId();
    const email = member.getEmail();
    let information = "";

    if (role === "Manager") {
      const officeNumber = member.getOfficeNumber();
      information = `<div class="row"><div class="col-6">
          <div class="card border-danger mx-auto mb-3 manager" style="width: 18rem">
          <h5 class="card-heading border-danger">${name}</h5>
          <img class="card-img-top bg-transparent border-danger" src="./assets/manager.png" alt="managerImg">
          <span class="badge badge-pill badge-danger">${role}</span>
          <div class="card-body bg-light text-danger">
          <ul class="list-group list-group-flush text-danger">
              <li class="list-group-item">ID:${id}</li>
              <li class="list-group-item">Email Address: ${email}</li>
              <li class="list-group-item">Office Phone: ${officeNumber}</li> </
          </ul>
          </div></div></div>`;
    } else if (role === "Engineer") {
      const gitHub = member.getGithub();
      information = `<div class="row"><div class="col-6">
      <div class="card border-success mx-auto mb-3 engineer" style="width: 18rem">
      <h5 class="card-heading border-success">${name}</h5>
      <img class="card-img-top bg-transparent border-success" src="./assets/engineer.png" alt="engineerImg">
      <span class="badge badge-pill badge-success">${role}</span>
      <div class="card-body bg-light text-success">
      <ul class="list-group list-group-flush text-success">
          <li class="list-group-item">ID:${id}</li>
          <li class="list-group-item">Email Address: ${email}</li>
          <li class="list-group-item">Github Username: ${gitHub}</li> </
      </ul>
      </div></div></div>`;
    } else if (role === "Intern") {
      const school = member.getSchool();
      information = `<div class="row"><div class="col-6">
      <div class="card border-primary mx-auto mb-3 intern" style="width: 18rem">
      <h5 class="card-heading border-primary">${name}</h5>
      <img class="card-img-top bg-transparent border-primary" src="./assets/intern.png" alt="internImg">
      <span class="badge badge-pill badge-primary">${role}</span>
      <div class="card-body bg-light text-primary">
      <ul class="list-group list-group-flush text-primary">
          <li class="list-group-item">ID:${id}</li>
          <li class="list-group-item">Email Address: ${email}</li>
          <li class="list-group-item">School Name: ${school}</li> </
      </ul>
      </div></div></div>`;
    }

    console.log("All Info Gathered For Team Member ");
  fs.writeFileSync("./dist/index.html", information, {flag: 'a'});
  });
}

function tailHTML(){
  const html = ` </div></div></div></div></main><script src="/index.js" type="text.javascript"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script></body></html>`;

  fs.writeFileSync("./dist/index.html", html, {flag: 'a'});
  console.log("Inquiry Complete!");
};

// These are the only functions that are called in the beginnning, because
// the head of the html page only needs to be called once, and the tail, which is called
// during the end of the bodyHTML function is made sure that its called once as well. 
// Since we are dynamically changing the body depending on team member count, most of the work gets done
// there.

headOfHTML();

initTeamMember();
