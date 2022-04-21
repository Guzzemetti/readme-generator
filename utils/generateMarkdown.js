// let apache = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;

// let mit = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;

// let gpl = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;

// let bsd = `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`;

// let license = (apache, mit, gpl, bsd);

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "None") {
    return `[License](${license})`;
  }
  return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "None"){
    return `\n * [License](#) \n`;
  }
  return "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "None"){
    return `## License
    
    This project is licensed under ${license}`;
  }
  return "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.project}
  
  ## Table of Contents

  ## Description
  
  ${data.description}
  
  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## Testing

  ${data.test}

  ## Contributors

  ${data.contributions}

  ## License

  ${data.license}

  ## Contact

  ### Github

  ${data.github}

  ### Email 

  ${data.email}

  ### Repository

  ${data.contributions}

 
  `;

  
}

module.exports = generateMarkdown;
