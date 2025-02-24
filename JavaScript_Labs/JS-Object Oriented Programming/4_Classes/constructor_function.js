// Constructor function
function Person(name, age) {
    this.name = name; // Instance-specific property
    this.age = age;   // Instance-specific property
}

// Add a method to the prototype
Person.prototype.greet = function() {
    console.log(`Hello, my name is ${this.name}. I am ${this.age} years old.`);
};

// Create instances
let alice = new Person("Alice", 28);
let bob = new Person("Bob", 35);

alice.greet(); // Output: Hello, my name is Alice. I am 28 years old.
bob.greet();   // Output: Hello, my name is Bob. I am 35 years old.