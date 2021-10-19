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
    }
  ])
};

questions();

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
