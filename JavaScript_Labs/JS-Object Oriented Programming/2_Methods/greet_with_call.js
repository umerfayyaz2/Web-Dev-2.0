// Define a function that logs a greeting
function greet(greetingMessage) {
    console.log(`${greetingMessage}, my name is ${this.name}.`);
}

// Create two objects with different names
let person1 = { name: "Alice" };
let person2 = { name: "Bob" };

// Use call to explicitly set `this` to person1
greet.call(person1, "Hello"); // Output: Hello, my name is Alice.

// Use call to explicitly set `this` to person2
greet.call(person2, "Hi"); // Output: Hi, my name is Bob.Added