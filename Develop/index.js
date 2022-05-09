// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const generateMarkdown = require('./utils/generateMarkdown');

// An array of questions for user input
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
        name: "installation",
        message: "What are the installation process?"
    },
    {
        type: "input",
        name: "functionality",
        message: "How would one use this application?"
    },
    {
        type: "input",
        name: "contribution",
        message: "List contributor(s)"
    },
    {
        type: "input",
        name: "test",
        message: "What are the test instructions?"
    },
    {
        type: "list", 
        name: "license",
        message: "What license should your project have?",
        choice : [
            "ISC",
            "MIT",
            "GNU AGPLv3",
            "Mozilla",
            "IBM",
            "Apache",
            "BSD",
            "Open Database License",
            "Public Domain Dedication and License",
            "Perl"
        ]
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
    }
];

// A function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        err ? console.log(err) : console.log("README sucessfully generated!")
    });
}

// A function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then(data => {
        writeToFile("genrateREADME.md", generateMarkdown(data));
    })
}

// Function call to initialize app
init();
