function licenseCheck(license) {
  if (license === 'APACHE 2.0'){
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  }
  if (license === 'MIT') {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  }
  if (license === 'GPL 3.0') {
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
  }
  if (license === 'BSD 3'){
    return `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`
  }
  else {
    return ""
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) { 
  lisenceCheck()
  return `
  # ${data.project}
  
  ---
  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributors](#contributors)
  * [License](#license)
  * [Contact](#contact)
  * [Repository](#repository)
  
  ---
  ## Description
  
  ${data.description}
  
  ---
  ## Installation

  ${data.installation}

  ---
  ## Usage

  ${data.usage}

  ---
  ## Testing

  ${data.test}

  ---
  ## Contributors

  ${data.contributions}

  ---
  ## Contact

  ### Github

  [${data.github}](https://github.com/${data.github})

  ### Email 

  [${data.email}](${data.email})

  ---
  ### Repository

  [${data.repo}](${data.repo})

  ---
  ## License

  ${licenseCheck(data.license)}
  `;  
}

module.exports = generateMarkdown;
