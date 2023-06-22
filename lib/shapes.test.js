//Used for jest to test for shapes
const { Circle, Square, Triangle} = require("./shapes.js");

//testing chracters with RBJ
describe('Circle', () => {
    it('should return Circle with yellow, RBJ character and white', () => {
        const circle = new Circle('yellow','RBJ','white');
        expect(circle.render()).toEqual(`

        <svg version="1.1"
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">
            <circle cx="150" cy="100" r="100" fill="yellow" /> 
            <text x="150" y="125" font-size="70" text-anchor="middle" fill="white">RBJ</text> 
        </svg>`

        );
    });
});

//testing characters with JFK
describe('Square', () => {
    it('should return Square that is blue, JFK characters and yellow', () => {
        const square = new Square('blue','JFK','yellow');
        expect(square.render()).toEqual(`
        <svg version="1.1"
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">
            <rect width="200" height="200" fill="blue"/>
            <text x="100" y="125" font-size="70" text-anchor="middle" fill="yellow">JFK</text>
        </svg>
        `
        );
    });
});

//testing characters with OBA
describe('Triangle', () => {
    it('should return logo Triangle that is green, OBA characters and blue', () => {
        const triangle = new Triangle('green','OBA','aliceblue');
        expect(triangle.render()).toEqual(`
        <svg version="1.1" 
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">
            <polygon points="100, 15 200, 200 0, 200" fill="green"/>
            <text x="100" y="185" font-size="70" text-anchor="middle" fill="blue">OBA</text>
        </svg>
        `
        );
    });
});