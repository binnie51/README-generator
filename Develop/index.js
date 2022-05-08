// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const markDown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title for this repository?"
    },
    {
        type: "input",
        name: "How would you describe your project?",
        message: "description"
    },
    {
        type: "input",
        name: "instruction",
        message: "What are the intallation instructors?"
    },
    {
        type: "input",
        name: "",
        message: ""
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
