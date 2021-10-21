// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = license => {
  if (!license) {
    return "";
  }

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}


// TODO: Create a function to generate markdown for README
const generateMarkdown = data => {
  return `
  # ${data.title}

  <img src="https://img.shields.io/badge/License-${data.license}-brightgreen"/>

  ## Description

  ${data.description}

  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#credits)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation

  Follow these instructions in order to install the project:

  ${data.install}

  ## Usage

  Follow these instructions for usage of this project:

  ${data.instruct}

  ## License

  This application is covered under the ${data.license} License

  ## Contributing

  Would you like to contribute to the project? Here are some steps:

  ${data.contribution}

  Original application created by: ${data.name}

  ## Tests

  Read the following steps to test the application:

  ${data.test}

  ## Questions

  If you have any further questions about the use of this project, please contact me at the following:

  Name: ${data.name}
  
  GitHub: [GitHub Profile](https://www.github.com/${data.github}/)

  Email Address: [${data.email}](mailto:${data.email})
`;
}

module.exports = generateMarkdown;
