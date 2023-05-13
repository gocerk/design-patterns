// implementor for Color 
class Color {
    log() {}
}

class Red extends Color {
    log() {
        return 'red';
    }
}

class Blue extends Color {  
    log() {
        return 'blue';
    }
}

// Abstract class Shape
class Shape {
    constructor(color) {
        this.color = color;
    }

    log() {}
}

// Concrete class Circle
class Circle extends Shape {
    constructor(color) {
        super(color);
    }

    log() {
        return `${this.color.log()} circle`;
    }
}

// Concrete class Square
class Square extends Shape {
    constructor(color) {
        super(color);
    }

    log() {
        return `${this.color.log()} square`;
    }
}

(() => {
    const redCircle = new Circle(new Red());
    const blueCircle = new Circle(new Blue());
    const redSquare = new Square(new Red());
    const blueSquare = new Square(new Blue());

    const logs = [redCircle.log(), blueCircle.log(), redSquare.log(), blueSquare.log()];
    console.log(logs);
})();