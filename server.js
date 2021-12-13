const genHTML = require('./src/htmlGen');
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");

const inquirer = require('inquirer');
const fs = require('fs');


//Create team array
const memberData = [];



// First person on team is usually the manager
// Create mananger prompts

const initManager = () => {
  inquirer
  .prompt([

// add prompts here
// {
//   type: 'input',
//   name: 'README title',
//   message: 'What is the title of the README?',
//   default: '*Title*'
// },

// {
//   type: 'input',
//   name: 'description',
//   message: 'Give a decent, thoughtout, and straight to the point description about your project',
// },

// {
// type: 'input',
// name: 'descriptionQuestion',
// message: 'Why did you make this?',
// },

// {
// type: 'input',
// name: 'Purpose',
// message: 'What is this meant to solve?',
// },

// {
// type: 'input',
// name: 'descriptionQuestion',
// message: 'Why did you make this?',
// },



  ])

  .then((data) => {
    const filename = `${data.name.toLowerCase().split(' ').join('')}.json`;

    fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
      err ? console.log(err) : console.log('Success!')
    );
  });


}


    // ASk questions
// ASk questions for every class

// store questions then pass them onto class constructors


// object initialized through these questions

// run these through the html generator . like the readme file.

//returns the string of the html , save it , save it in the dist folder as index.html

function initTeam(){
  console.log("newbie", memberData)
  fs.writeFileSync(
    "./dist.index.html", genHTML(memberData), "utf-8"
  );

}