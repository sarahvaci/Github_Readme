// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [

    {
        type: 'input',
        name: 'gitName',
        message: 'What is your GitHub username?',
      },

      {
        type: 'input',
        name: 'projectName',
        message: "What is your project's name?",
      },

      {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
      },

      {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project?',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
      },

      {
        type: 'input',
        name: 'use',
        message: 'Enter what the user needs to know about using this repo',
      },

      {
        type: 'input',
        name: 'contributing',
        message: 'How can others contribute to this project?',
      },

      {
        type: 'input',
        name: 'test',
        message: 'How should this project test be set up?',
        default: 'npm test',
      },

      {
        type: 'input',
        name: 'installation',
        message: 'What command should be run to install dependencies?',
        default: 'npm i',
      },
];

// TODO: Create a function to write README file
function writeAFile(projectName, data) {
    return fs.writeFileSync(path.join(process.cwd(), projectName), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answer) => {
        console.log('Generating README...');
        writeAFile('README.md', generateMarkdown({ ...answer }));
      });
}

// Function call to initialize app
init();

