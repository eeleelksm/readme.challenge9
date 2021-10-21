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
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation

  What are the steps required to install this project? Read the following step-by-step description of how to get this application running.

  ${data.install}

  ## Usage

  Follow these instructions on how to use this application:

  ${data.instruct}

  ## License

  This application is covered under the ${data.license} License

  ## Contributing

  Participating in open source is often a highly collaborative experience. Want to contribute to the application? Please read the following steps on how to do so:

  ${data.contribution}

  This application was originally created by: ${data.name}

  ## Tests

  The following tests were written for this application. Here are examples on how to run them:

  ${data.test}

  ## Questions

  Have any further questions about the use of this project? Feel free to contact me at:

  Name: ${data.name}
  
  GitHub: [GitHub Profile](https://www.github.com/${data.github}/)

  Email Address: [${data.email}](mailto:${data.email})
`;
}

module.exports = generateMarkdown;
