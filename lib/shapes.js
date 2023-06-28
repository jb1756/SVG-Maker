// Export 'Triangle, Circle and Square' Classes 
// Portion is contstructing the 
class Shape {
    constructor(text, textColor, shapeColor) {
        this.shapeColor = shapeColor;
        this.text = text;
        this.textColor = textColor;
        this.svgElement = null;
    }
} 

    colorSet(shapeColor) {
        this.shapeColor = shapeColor;

        if(this.svgElement) {
            this.svgElement.setAttribute('fill', this.shapeColor);
        }
    }
{
    render() {}

} 

class Circle extends Shape {
    constructor(text, textColor, shapeColor) {
      super(text, textColor, shapeColor);
    }
  
    render() {
      return `<circle cx="150" cy="115" r="80" fill="${this.shapeColor}" />`;
    }
  }

  class Square extends Shape {
    constructor(text, textColor, shapeColor) {
      super(text, textColor, shapeColor);
    }
  
    render() {
      return `<rect width="200" height="200" fill="${this.shapeColor}" />`;
    }
  }

  class Triangle extends Shape {
    constructor(text, textColor, shapeColor) {
      super(text, textColor, shapeColor);
    }
  
    render() {
      return `<polygon points="100, 20 250, 300 0, 300" fill="${this.shapeColor}" />`;
    }
  }
  
  module.exports = { Circle, Square, Triangle };