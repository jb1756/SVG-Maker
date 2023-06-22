const inquirer = require("inquirer");
const fs = require("fs");
const {Circle, Square, Triangle} = require("./lib/shapes");

// Array of questions
inquirer
  .prompt([
    {/* Pass your questions in here */
        name: 'text',
        type: 'input',
        message: "Enter 3 Characters:"
    },

    {
        name: 'textColor',
        type: 'input',
        message: 'Choose a color:'
    },

    {   name: 'shape',
        type:'list',
        message: 'Choose one shape between these:',
        choices: ['Circle','Square','Triangle']
    },

    {
        name: 'shapeColor',
        type:'input',
        message: 'What color of the shape? (Color or Hexadecimal)'

    }=

  ])
  .then((answer) => {
    // Use user feedback for... whatever!!
    if (answer.text.length > 3) {
        console.error('Only 3 Characters or less')
        return
    }
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });