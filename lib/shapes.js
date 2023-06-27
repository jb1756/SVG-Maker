// Export 'Triangle, Circle and Square' Classes 
// Portion is contstructing the 
class shape {
    constructor(shapeColor, text, textColor) {
        this.shapeColor = shapeColor;
        this.text = text;
        this.textColor = textColor;
        this.svgM = nul
    }
} 

    colorSet(shapeColor) {
        this.shapeColor = shapeColor;

        if(this.svgM) {
            this.svgM.setAttribute('fill', this.color);
        }
    }
{
    render() {}

} 

class Circle extends shape {
    constructor(shapeColor, text, textColor){
        super(shapeColor,text,textColor);
    }
    render(){
        return '<circle cx="150" cy="115" r="80" fill="yellow" />';
        
    }
}

class Square extends shape {
    constructor(shapeColor, text, textColor){
        super(shapeColor,text,textColor);
    }
    render(){
        return '<rect width="200" height="200" fill="blue"/>'
    }
}

class Triangle extends shape {
    constructor(shapeColor, text, textColor){
        super(shapeColor,text,textColor);
    }
    render(){
       return '<polygon points="100, 20 250, 300 0, 300" fill="green"/>' 
    }
}