// TODO: Include packages needed for this application
const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
const questions = () => {
  console.log(`
  Professional README Generator
  =============================
  `)

  return inquirer.prompt([
    {
      type: "input",
      name: "name", 
      message: "What is your name? (Required)",
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter your name!");
          return false;
        }
      }
    },
    // {
    //   type: "confirm",
    //   name: "confirmPartners",
    //   message: "Would you like to enter the name of a contributer?",
    //   default: true
    // },
    // {
    //   type: "input",
    //   name: "about", 
    //   message: "Provide some information about yourself.",
    //   when: ({ confirmAbout }) => {
    //     if (confirmAbout) {
    //       return true;
    //     } else {
    //       return false;
    //     }
    //   }
    // },
    {
      type: "input",
      name: "project",
      message: "What is the name of your project? (Required)",
      validate: projectInput => {
        if (projectInput) {
          return true;
        } else {
          console.log("Please enter your project name!");
          return false;
        }
      }
    },
  ])
};

questions();

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
