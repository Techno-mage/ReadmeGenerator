// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

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
  * ${data.licence}
## Contributing
  * ${data.contribute}
## Tests
  * ${data.tests}
## Questions
  * For questions email me at ${data.email} or find me on github at https://github.com/${data.username}
`;
}

module.exports = generateMarkdown;
