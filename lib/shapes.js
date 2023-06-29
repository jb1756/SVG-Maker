// Export 'Triangle, Circle and Square' Classes 
// Portion is contstructing the 
class Shape {
    constructor(text, textColor, shapeColor) {
      this.shapeColor = shapeColor;
      this.text = text;
      this.textColor = textColor;
      this.svgElement = null;
    }
  
    setColor(shapeColor) {
      this.shapeColor = shapeColor;
      if (this.svgElement) {
        this.svgElement.setAttribute('fill', this.shapeColor);
      }
    }
  }


class Circle extends Shape {
    constructor(text, textColor, shapeColor) {
      super(text, textColor, shapeColor);
    }
  
    render() {
      return  `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="230">
      <circle cx="150" cy="115" r="80" fill="${this.shapeColor}" />
      <text x="150" y="150" font-size="50" text-anchor="middle" fill="${this.textColor}">${this.text}
      </svg>`;
    }
  }

  class Square extends Shape {
    constructor(text, textColor, shapeColor) {
      super(text, textColor, shapeColor);
    }
  
    render() {
      return `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="230">
        <rect width="200" height="200" fill="${this.shapeColor}" />
        <text x="150" y="150" font-size="50" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
      </svg>`;
    }
  }

  class Triangle extends Shape {
    constructor(text, textColor, shapeColor) {
      super(text, textColor, shapeColor);
    }
  
    render() {
      return `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="230">
        <polygon points="100, 20 250, 300 0, 300" fill="${this.shapeColor}" />
        <text x="150" y="150" font-size="50" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
      </svg>`;
    }
  }
  
  module.exports = { Circle, Square, Triangle };