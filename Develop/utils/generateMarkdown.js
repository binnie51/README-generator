// A function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "ISC":
      return "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)]";
    case "MIT":
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]";
    case "GNU AGPLv3":
      return "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)]";
    case "Mozilla":
      return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)]";
    case "IBM":
      return "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)]";
    case "Apache":
      return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]";
    case "BSD":
      return "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)]";
    case "Open Database License":
      return "[![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)]";
    case "Public Domain Dedication and License":
      return "[![License: ODbL](https://img.shields.io/badge/License-PDDL-brightgreen.svg)]";
    case "Perl":
      return "[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)]";
    default:
      return '';            
  };
}

// A function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "ISC":
      return "(https://opensource.org/licenses/ISC)";
    case "MIT":
      return "(https://opensource.org/licenses/MIT)";
    case "GNU AGPLv3":
      return "(https://www.gnu.org/licenses/agpl-3.0)";
    case "Mozilla":
      return "(https://opensource.org/licenses/MPL-2.0)";
    case "IBM":
      return "(https://opensource.org/licenses/IPL-1.0)";
    case "Apache":
      return "(https://opensource.org/licenses/Apache-2.0)";
    case "BSD":
      return "(https://opensource.org/licenses/BSD-3-Clause)";
    case "Open Database License":
      return "(https://opendatacommons.org/licenses/odbl/)";
    case "Public Domain Dedication and License":
      return "(https://opendatacommons.org/licenses/pddl/)";
    case "Perl":
      return "(https://opensource.org/licenses/Artistic-2.0)";
    default:
      return '';
  };
}

// A function to generate markdown for README
function generateMarkdown(data) {
  let license = data.licence;
  
  return `
  # ${data.title} 
  ${renderLicenseBadge(license)}${renderLicenseLink(license)}

  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributor](#contributor)
  * [Tests](#test)
  * [Questions?](#questions)

  ## Description
  ${data.description}

  ## Installation 
  ${data.instruction}

  ## Usage
  ${data.functionality}

  ## Contributor
  ${data.contribution}

  ## Tests
  ${data.test}

  ## Questions?
  My gitHub: ${data.github} 
  Email me @ ${data.email}

  ## License
  Copyright (c) ${data.github}. All rights reserved.
`;
}

module.exports = generateMarkdown;
