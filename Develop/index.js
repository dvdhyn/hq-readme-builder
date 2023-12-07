// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [  
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?:',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of your project:',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What was the installation process for this project?:',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How will this application be used?:',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Provide the details of the contributions to your project:',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'How were you able to test your project?:',
    },
    {
        type: 'list',
        name: 'license',
        choices: ['MIT', 'Apache 2.0', 'GNU GPLv3', 'ISC'],
        message: 'Which license did you use?:',
    },
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username?:',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?:',
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data);
}

// TODO: Create a function to initialize app
function init() {  
    inquirer.prompt(questions).then((response) => {
    const markdown = generateMarkdown(response);
    writeToFile('README.md', markdown);
  });}

// Function call to initialize app
init();
