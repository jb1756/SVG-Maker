//Used for jest to test for shapes
const { Circle, Square, Triangle} = require("./shapes.js");

//testing chracters with RBJ
describe('Circle', () => {
    it('test for a circle with white background, yellow circle, rbj characters', () => {
        const circle = new Circle('RBJ','white','yellow');
        expect(circle.render()).toEqual(`

        <svg version="1.1"
            width="400" height="400" xmlns="http://www.w3.org/2000/svg">
            <circle cx="150" cy="115" r="80" fill="yellow" /> 
            <text x="150" y="150" font-size="50" text-anchor="middle" fill="white">RBJ</text> 
        </svg>`

        );
    });
});

//testing characters with JFK
describe('Square', () => {
    it('test for a square with yellow background, blue square and jfk characters', () => {
        const square = new Square('JFK','yellow','blue');
        expect(square.render()).toEqual(`
        <svg version="1.1"
            width="400" height="400"xmlns="http://www.w3.org/2000/svg">
            <rect width="200" height="200" fill="blue"/>
            <text x="150" y="150" font-size="50" text-anchor="middle" fill="yellow">JFK</text>
        </svg>
        `
        );
    });
});

//testing characters with OBA
describe('Triangle', () => {
    it('test for a blue background, green and OBA characters.', () => {
        const triangle = new Triangle('OBA','blue','green');
        expect(triangle.render()).toEqual(`
        <svg version="1.1" 
            width="400" height="400" xmlns="http://www.w3.org/2000/svg">
            <polygon points="100, 20 250, 300 0, 300" fill="green"/>
            <text x="150" y="150" font-size="50" text-anchor="middle" fill="blue">OBA</text>
        </svg>
        `
        );
    });
});