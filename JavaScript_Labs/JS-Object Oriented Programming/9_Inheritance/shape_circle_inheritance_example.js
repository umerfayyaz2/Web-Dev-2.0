// Base class: Shape
class Shape {
    constructor(color) {
        this.color = color;
    }

    render() {
        return `Rendering a shape with color ${this.color}.`;
    }
}

// Derived class: Circle
class Circle extends Shape {
    constructor(color, radius) {
        super(color); // Call the parent constructor
        this.radius = radius; // Add circle-specific property
    }

    area() {
        return Math.PI * this.radius ** 2; // Calculate the area of the circle
    }

    render() {
        // Override the render method to include circle-specific details
        return super.render() + ` It's a circle with radius ${this.radius}.`;
    }
}

// Test the classes
const shape = new Shape("blue");
console.log(shape.render()); // Output: Rendering a shape with color blue.

const circle = new Circle("red", 5);
console.log(circle.render()); // Output: Rendering a shape with color red. It's a circle with radius 5.
console.log(circle.area()); // Output: 78.53981633974483