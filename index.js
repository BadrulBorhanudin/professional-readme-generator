// Importing necessary modules
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// Prompting the user for input using Inquirer
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
        // Generating README content tailored on user's answers
        const readmeFileContent = generateMarkdown(answers);

        // Writing the generated content to a README.md file
        fs.writeFile('./sample/README.md', readmeFileContent, (err) =>
          err ? console.log(err) : console.log('Successfully created README.md!')
        );
      });
