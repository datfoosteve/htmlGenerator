const genHTML = require("./src/htmlGen");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");

const inquirer = require("inquirer");
const fs = require("fs");

//Create team array
const memberData = [];

// First person on team is usually the manager
// Create mananger prompts

const initManager = async () => {
  const managerDataQ = await inquirer.prompt([
    //add prompts here
    {
      type: "input",
      name: "name",
      message: "What is the managers Name?",
    },

    {
      type: "input",
      name: "id",
      message: "What is the managers ID",
    },

    {
      type: "input",
      name: "email",
      message: "What is The managers Email ?",
    },

    {
      type: "input",
      name: "officeNumber",
      message: "What is his office number>?",
    },
  ]);

  const manager = new Manager(
    managerDataQ.name,
    managerDataQ.id,
    managerDataQ.email,
    managerDataQ.officeNumber
  );
  memberData.push(manager);
  initEngineer();
};

const initEngineer = async () => {
  const engineerDataQ = await inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is the Engineers Name?",
    },

    {
      type: "input",
      name: "id",
      message: "What is the Engineers ID",
    },

    {
      type: "input",
      name: "email",
      message: "What is The Engineers Email ?",
    },

    {
      type: "input",
      name: "github",
      message: "What is the Engineers github?",
    },
  ]);

  const engineer = new Engineer(
    engineerDataQ.name,
    engineerDataQ.id,
    engineerDataQ.email,
    engineerDataQ.github
  );
  memberData.push(engineer);
  initIntern();
};

const initIntern = async () => {
  const internDataQ = await inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is the Intern Name?",
    },

    {
      type: "input",
      name: "id",
      message: "What is the Intern ID",
    },

    {
      type: "input",
      name: "email",
      message: "What is The Intern Email ?",
    },

    {
      type: "input",
      name: "schoolname",
      message: "What is the Intern's school name?",
    },
  ]);

  const intern = new Intern(
    internDataQ.name,
    internDataQ.id,
    internDataQ.email,
    internDataQ.schoolname
  );
  memberData.push(intern);
  initTeam();
};


// ASk questions
// ASk questions for every class

// store questions then pass them onto class constructors

// object initialized through these questions

// run these through the html generator . like the readme file.

//returns the string of the html , save it , save it in the dist folder as index.html

function initTeam() {
  console.log(memberData);
  fs.writeFileSync("./dist/index.html", genHTML(memberData), "utf-8");
}

initManager();
