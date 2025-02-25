// Define a class-like structure using a prototype
function Animal(type) {
    this.type = type;
}

// Add a shared property to the prototype
Animal.prototype.sound = "Generic animal sound";

// Create instances
let lion = new Animal("Lion");
let tiger = new Animal("Tiger");

// Access the shared property
console.log(lion.sound); // Output: Generic animal sound
console.log(tiger.sound); // Output: Generic animal sound

// Override the property for one instance
lion.sound = "Roar";

// Check the overridden property
console.log(lion.sound); // Output: Roar
console.log(tiger.sound); // Output: Generic animal sound

// Check the prototype property
console.log(Animal.prototype.sound); // Output: Generic animal sound