const inquirer = require('inquirer');
const fs = require('fs');

const generateMarkdown = (data) => {
    const { title, description, installation, usage, license, contribution, tests, email, username } = data;

    const renderLicenseBadgeAndLink = (license) => {
        if (license) {
            switch (license) {
                case 'MIT':
                    return {
                        badge: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
                        link: 'This application is covered under the [MIT license.](https://opensource.org/licenses/MIT)'
                    };
                case 'Apache 2.0':
                    return {
                        badge: '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
                        link: 'This application is covered under the [Apache 2.0.](https://opensource.org/licenses/Apache-2.0)'
                    };
                case 'GPL 3.0':
                    return {
                        badge: '[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
                        link: 'This application is covered under the [GPL 3.0 license.](https://www.gnu.org/licenses/gpl-3.0)'
                    };
                default:
                    return { badge: '', link: '' };
            }
        } else {
            return { badge: '', link: '' };
        }
    };

    return `## Title
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
${renderLicenseBadgeAndLink(license).badge}  
${renderLicenseBadgeAndLink(license).link}

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
            choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'None']
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
    
        fs.writeFile('./sample/README.md', readmeFileContent, (err) =>
          err ? console.log(err) : console.log('Successfully created README.md!')
        );
      });
