const inquirer = require("inquirer");
const fs = require("fs");
const { Circle, Triangle, Square } = require("./lib/shapes");

// Array of questions
const questions = [
    {
      name: 'text',
      type: 'input',
      message: "Enter 3 Characters:",
      validate: function (input) {
        if (input.length < 3) {
          return 'Only 3 Characters or less';
        }
        return true;
      }
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

  ];

//Write Function to generate SVG.
function generateSVG(shape, text, textColor, shapeColor) {
  let svgLogo;
  switch (shape) {
    case 'Circle':
      svgLogo = new Circle(text, textColor, shapeColor);
      break;
    case 'Square':
      svgLogo = new Square(text, textColor, shapeColor);
      break;
    case 'Triangle':
      svgLogo = new Triangle(text, textColor, shapeColor);
      break;
    default:
      throw new Error('Invalid shape');
  }
  return svgLogo.render();
}

// Ask questions, initialize to create logo using responses, and catch errors.

function init() {
  inquirer.prompt(questions)
    .then(response => {
      const { text, textColor, shape, shapeColor } = response;
      const svgLogo = generateSVG(shape, text, textColor, shapeColor);

      fs.writeFile("logo-params.svg", svgLogo, err => {
        if (err) {
          console.error('Error writing file:', err);
        } else {
          console.log('Logo parameters has been saved successfully!');
        }
      });
    })
    .catch(error => {
      if (error.isTtyError) {
        console.error('Prompt couldn\'t be rendered in the current environment');
      } else {
        console.error('Something else went wrong:', error);
      }
    });
}

init();