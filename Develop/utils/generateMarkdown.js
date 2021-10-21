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

  Follow these instructions for usage:

  ${data.instruct}

  ## License

  ## Contributing

  ## Tests

  ## Questions

  If you have any further questions about the use of this project, please contact me at the following:

  Name: ${data.name}
  
  GitHub: [GitHub Profile](https://www.github.com/${data.github}/)

  Email Address: [${data.email}](mailto:${data.email})
`;
}

module.exports = generateMarkdown;
