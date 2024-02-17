# 09 Node.js: Professional README Generator

## Module 09 Challenge
This challenge is different from the previous challenges. It won't be deployed and I won't be given any starter code. Instead, I'll have to create the application from scratch!

## My Task

When creating an open source project on GitHub, it’s important to have a high-quality README for the app. This should include what the app is for, how to use the app, how to install it, how to report issues, and how to make contributions&mdash;this last part increases the likelihood that other developers will contribute to the success of the project. 

I can quickly and easily create a README file by using a command-line application to generate one. This allows the project creator to devote more time to working on the project.

My task is to create a command-line application that dynamically generates a professional README.md file from a user's input using the [Inquirer package](https://www.npmjs.com/package/inquirer/v/8.2.4). This application is built by the help of [Professional README Guide](https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide) as a reminder of everything that a high-quality, professional README should contain. 

The application will be invoked by using the following command:

```bash
node index.js
```

## User Story

```
AS A developer
I WANT a README generator
SO THAT I can quickly create a professional README for a new project
```

## Acceptance Criteria

```
GIVEN a command-line application that accepts user input
WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
WHEN I enter my project title
THEN this is displayed as the title of the README
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README
```

## Getting Started

Here are some guidelines to use the application:

* Download the repo [from here](https://github.com/BadrulBorhanudin/readme-generator) and then unzip it.

* Make sure NodeJS is installed on your system. If you haven't installed it yet, [go to this link](https://nodejs.org/en/download).

* Once NodeJS is installed, go to the correct directory that contains downloaded repo and open the terminal then type npm install inquirer@8.2.4.

* Run the application by typing node index.js. The application should run and starts prompting questions to generate README.md file.

* Once finished answering the questions, the generated README.md file will be in a Sample folder inside the repo.

## Preview

The following animation demonstrates how to use the application:

![A user downloads the repo and npm install inquirer to use the application then answers the questions to generate a readme file.](./Assets/04-web-apis-homework-demo.gif)


## Notes

* [Click here for the walkthrough video demonstrating the functionality of the application.](https://drive.google.com/file/d/1YGFJ1f8iFynTYWTZozwMnJYlnje_ajzd/view?usp=sharing)

* [Click here for the URL of the GitHub repository, with a unique name and a README that describes this project.](https://github.com/BadrulBorhanudin/readme-generator)

