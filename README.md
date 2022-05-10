# README-generator
A command-line application that enables users to generate a professional README file from a user's input using the npm Inquirer node module.

## How to use?
Users will be given sets of questions/prompts and their inputed will taylored into the the already existed template and write all of the content in a file: 'generateREADME.md' 
### How to install?
1. Download the clone repository
2. Node.js is required to run the application
3. Install the required npm library package

## Technologies
* Node.js
* npm package manager (inquirer)

## Demo
[Click here for a full-view video](https://drive.google.com/file/d/1OWwvoivhHJM5pXi_t9rbFGeueMoB-lbE/view) <br/>
![demo](./assests/videos/README%20generator%20demo%20(1).gif) 
## User Story

```md
AS A developer
I WANT a README generator
SO THAT I can quickly create a professional README for a new project
```

## Acceptance Criteria

```md
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

## Licesnse
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg) <br/>
Copyright (c) Vincent Tjia. All rights reserved.