// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
[![License](https://img.shields.io/badge/license-${data.license}-green)](https://shields.io/)

## Description
  ${data.desc}

## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)


## Installation
  * ${data.install}
## Usage
  * ${data.usage}
## License
  * This code is under a ${data.license} license.
## Contributing
  * ${data.contribute}
## Tests
  * ${data.tests}
## Questions
  * For questions email me at ${data.email} or find me on github at https://github.com/${data.username}
`;
}

module.exports = generateMarkdown;
