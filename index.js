// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// pulling in the markdown generator template
const generateReadme = require("./Develop/utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = () => {

  console.log(`
  Professional README Generator
  =============================
  `)

  return inquirer.prompt([
    {// Name of User
      type: "input",
      name: "name", 
      message: "What is your first and last name?",
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter your name!");
          return false;
        }
      }
    },
    { // Github Username
      type: "input",
      name: "github", 
      message: "What is your GitHub username?",
      validate: githubInput => {
        if (githubInput) {
          return true;
        } else {
          console.log("Please enter your GitHub username!");
          return false;
        }
      }
    },
    { // Email
      type: "input",
      name: "email", 
      message: "What is your email address?",
      validate: emailInput => {
        if (emailInput) {
          return true;
        } else {
          console.log("Please enter your email address!");
          return false;
        }
      }
    },
    { // Name of the Project
      type: "input",
      name: "title",
      message: "What is the name of your application?",
      validate: titleInput => {
        if (titleInput) {
          return true;
        } else {
          console.log("Please enter your application name!");
          return false;
        }
      }
    },
    { // Description of Project
      type: "input",
      name: "description",
      message: "Please provide a description of your application.",
      validate: descriptionInput => {
        if (descriptionInput) {
          return true;
        } else {
          console.log("Please enter your application description!");
          return false;
        }
      }
    },
    { // Installation Steps
      type: "input",
      name: "install", 
      message: "Please provide your application's installation steps.",
      validate: installInput => {
        if (installInput) {
          return true;
        } else {
          console.log("Please enter your application's installation steps!");
          return false;
        }
      }
    },
    { // Usage Instructions
      type: "input",
      name: "instruct", 
      message: "Please provide the usage instructions for this application.",
      validate: instructInput => {
        if (instructInput) {
          return true;
        } else {
          console.log("Please enter the instructions!");
          return false;
        }
      }
    },
    { // Contribution guidelines
      type: "input",
      name: "contribution", 
      message: "Please provide contribution guidelines for this application project.",
      validate: contributionInput => {
        if (contributionInput) {
          return true;
        } else {
          console.log("Please enter the contribution guidelines.");
          return false;
        }
      }
    },
    { // Test intructions
      type: "input",
      name: "test", 
      message: "Please provide the test instructions for this application.",
      validate: testInput => {
        if (testInput) {
          return true;
        } else {
          console.log("Please enter the test instructions!");
          return false;
        }
      }
    }, 
    {// Adding a license
      type: "list",
      name: "license", 
      message: "Select a license for your application.",
      choices: [
        "Apache", 
        "Boost", 
        "BSD3", 
        "Eclipse", 
        "IBM", 
        "ISC", 
        "MIT", 
        "Mozilla", 
        "Zlib"],
      validate: licenseInput => {
        if (licenseInput) {
          return true;
        } else {
          console.log("Please select a license.");
          return false;
        }
      }
    }
  ])
};

// TODO: Create a function to write README file
function writeToFile(data) {
    fs.writeFile("./Develop/dist/README.md", data, err => {
      // if there's an error, reject and return the error
      if (err) {
        return (err);
      } // if there's no error, present message thata markdown's been created
      console.log("Your markdown file has been created! It can be found in the 'dist' folder.");
  });
};

// TODO: Create a function to initialize app
function init() {
  questions() // present the questions
  .then(generateReadme) // then run generateReadme
  .then(pageReadme => {
    return writeToFile(pageReadme); // then write file into new location
  })
  .catch(err => {
    console.log(err);
  })
}

// Function call to initialize app
init();
