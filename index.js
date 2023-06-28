const inquirer = require("inquirer");
const fs = require("fs");
const { Circle, Triangle, Square } = require("./lib/shapes");

// Array of questions
inquirer
  .prompt([
    {
      name: 'text',
      type: 'input',
      message: "Enter 3 Characters:",
      validate: function (input) {
        if (input.length > 3) {
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



// Ask questions, initialize to create logo using responses, and catch errors.

function init() {
  inquirer.prompt(questions)
    .then(response => {
      const { text, textColor, shape, shapeColor } = response;
      let logo;

      switch (shape) {
        case 'Circle':
          logo = new Circle(text, textColor, shapeColor);
          break;
        case 'Square':
          logo = new Square(text, textColor, shapeColor);
          break;
        case 'Triangle':
          logo = new Triangle(text, textColor, shapeColor);
          break;
      }

      const data = {
        text: text,
        textColor: textColor,
        shape: shape,
        shapeColor: shapeColor
      };

      fs.writeFile("logo-params.json", JSON.stringify(data, null, 1), err => {
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