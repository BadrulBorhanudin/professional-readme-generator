const inquirer = require('inquirer');
const fs = require('fs');

const generateMarkdown = (data) => {
    const { title, description, installation, usage, license, contribution, tests, email, username } = data;

    const renderLicenseBadge = (license) => {
        if (license) {
            switch (license) {
                case 'MIT':
                    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
                case 'Apache 2.0':
                    return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
                case 'GPL 3.0':
                    return '[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
                default:
                    return '';
            }
        } else {
            return '';
        }
    };

    const renderLicenseLink = (license) => {
        if (license) {
            return `## License\n\nThis application is covered under the ${license} license.`;
        } else {
            return '';
        }
    };

    return `
    
## Title
${title}

## Description
${description}

## Table of Contents
- [Installations](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${installation}

## Usage
${usage}

## License
${renderLicenseBadge(license)}
${renderLicenseLink(license)}

## Contributing
${contribution}

## Tests
${tests}

## Questions
If you have any questions, you can reach out to me via email at ${email}. You can also find more information about me and my other projects on my GitHub profile: ${username}`;
};

module.exports = generateMarkdown;

inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'Add Title of Project',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Add Description of Project',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Add Installation Instruction',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Add Usage Information',
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Add Contribution Guidelines',
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Add Tests Instructions',
        },
        {
            type: 'list',
            name: 'license',
            message: 'Select License',
            choices: ['MIT', 'Apache 2.0', 'GNU GPLv3', 'ISC', 'None']
        },
        {
            type: 'input',
            name: 'username',
            message: 'Add Github Username',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Add Your Email Address',
        },

    ])
    .then((answers) => {
        const readmeFileContent = generateMarkdown(answers);
    
        fs.writeFile('README.md', readmeFileContent, (err) =>
          err ? console.log(err) : console.log('Successfully created README.md!')
        );
      });
