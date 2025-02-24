// Define a prototype object
let protoPerson = {
    greet() {
        console.log(`Hello, my name is ${this.name}.`);
    }
};

// Constructor function
function createPerson(name, age) {
    let person = Object.create(protoPerson); // Set prototype
    person.name = name; // Instance-specific property
    person.age = age;   // Instance-specific property
    return person;
}

// Create instances
let john = createPerson("John", 30);
let jane = createPerson("Jane", 25);

john.greet(); // Output: Hello, my name is John.
jane.greet(); // Output: Hello, my name is Jane.