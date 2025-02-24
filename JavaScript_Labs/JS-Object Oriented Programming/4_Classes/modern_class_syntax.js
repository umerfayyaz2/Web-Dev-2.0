// Define a class
class Person {
    constructor(name, age) {
        this.name = name; // Instance-specific property
        this.age = age;   // Instance-specific property
    }

    greet() {
        console.log(`Hello, my name is ${this.name}. I am ${this.age} years old.`);
    }
}

// Create instances
let charlie = new Person("Charlie", 40);
let diana = new Person("Diana", 22);

charlie.greet(); // Output: Hello, my name is Charlie. I am 40 years old.
diana.greet();   // Output: Hello, my name is Diana. I am 22 years old.