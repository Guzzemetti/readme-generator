// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const path = require("path");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "project",
        message: "What is the title of your of your project?"
    },
    {
        type: "input",
        name: "description",
        message: "Please enter a brief description of your project."
    },
    {
        type: "input",
        name: "installation",
        message: "Please provide any installation guidelines"
    },
    {
        type: "input",
        name: "usage",
        message: "Please provide any applicable usage instructions."
    },
    {
        type: "input",
        name: "test",
        message: "Please provide instructions on how to test this project."
    },
    {
        type: "input",
        name: "contributions",
        message: "Please provide the names of any collaborators for this project."
    },
    {
        type: "list",
        name: "license",
        message: 'What kind of license should your project have?',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
    },
    {
        type: "input",
        name: "github",
        message: "What is your GitHub username?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?"
    },
    {
        type: "input",
        name: "repo",
        message: "Please enter a valid link to your GitHub repository."
    }
];

// TODO: Create a function to write README file
function writeToFile(data) {
    fs.writeFile("readme.md", generateMarkdown(data), (error) =>
    error ? console.log(error) : console.log("Success!")
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(writeToFile);
}

// Function call to initialize app
init();
