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
    {
      type: "input",
      name: "github", 
      message: "What is your GitHub username? (Required)",
      validate: githubInput => {
        if (githubInput) {
          return true;
        } else {
          console.log("Please enter your GitHub username!");
          return false;
        }
      }
    },
    {
      type: "input",
      name: "email", 
      message: "What is your email address? (Required)",
      validate: emailInput => {
        if (emailInput) {
          return true;
        } else {
          console.log("Please enter your email address!");
          return false;
        }
      }
    },
    {
      type: "input",
      name: "title",
      message: "What is the name of your project? (Required)",
      validate: titleInput => {
        if (titleInput) {
          return true;
        } else {
          console.log("Please enter your project name!");
          return false;
        }
      }
    },
    {
      type: "input",
      name: "description",
      message: "Please provide a description of your project. (Required)",
      validate: descriptionInput => {
        if (descriptionInput) {
          return true;
        } else {
          console.log("Please enter your project description!");
          return false;
        }
      }
    },
    {
      type: "input",
      name: "install", 
      message: "Please provide your project's installation instructions. (Required)",
      validate: installInput => {
        if (installInput) {
          return true;
        } else {
          console.log("Please enter your project's installation instructions!");
          return false;
        }
      }
    },
    {
      type: "input",
      name: "instruct", 
      message: "Please provide the usage instructions for this project. (Required)",
      validate: instructInput => {
        if (instructInput) {
          return true;
        } else {
          console.log("Please enter the instructions!");
          return false;
        }
      }
    },
    {
      type: "input",
      name: "contribution", 
      message: "Please provide contribution guidelines for this project. (Required)",
      validate: contributionInput => {
        if (contributionInput) {
          return true;
        } else {
          console.log("Please enter the contribution guidelines!");
          return false;
        }
      }
    },
    {
      type: "confirm",
      name: "confirmPartner", 
      message: "Would you like to add a contributor?",
      default: true
    },
    {
      type: "input",
      name: "contributor", 
      message: "What is the name of your contributor?",
      when: ({ confirmPartner }) => {
        if (confirmPartner) {
          return true;
        } else {
          return false;
        }
      }
    },
    {
      type: "input",
      name: "gitcontributor", 
      message: "What's the contributor's GitHub username?",
      when: ({ confirmPartner }) => {
        if (confirmPartner) {
          return true;
        } else {
          return false;
        }
      }
    },
    {
      type: "input",
      name: "test", 
      message: "Please provide the test instructions for this project. (Required)",
      validate: testInput => {
        if (testInput) {
          return true;
        } else {
          console.log("Please enter the test instructions!");
          return false;
        }
      }
    },
    {
      type: "confirm",
      name: "confirmLicense", 
      message: "Would you like to add a license?",
      default: true
    },
    {
      type: "list",
      name: "license", 
      message: "Select a license for your project.",
      choices: ["Apache", "Boost", "BSD 3", "Eclipse", "IBM", "ISC", "MIT", "Mozilla", "Zlib"],
      when: ({ confirmLicense }) => {
        if (confirmLicense) {
          return true;
        } else {
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
