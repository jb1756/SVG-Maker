const inquirer = require("inquirer");
const fs = require("fs");
const { Circle } = require("./lib/shapes");
const { Triangle } = require("./lib/shapes");
const { Square } = require("./lib/shapes");

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

    }

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

// ask questions, initialize to create logo using responses and catch errors.
// 

function init() {
  inquirer
    .prompt(questions)
    .then((response) => {
      createLogo(response);
    })
    .catch(err =>{
      console.log(err)
    });
}

init();