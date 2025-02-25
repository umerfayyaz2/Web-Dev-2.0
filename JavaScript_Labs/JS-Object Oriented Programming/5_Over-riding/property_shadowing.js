// Define a prototype object
let animalPrototype = {
    sound: "Generic animal sound",
    speak() {
        console.log(this.sound);
    }
};

// Create an object with the prototype
let dog = Object.create(animalPrototype);

// Access the inherited property
console.log(dog.sound); // Output: Generic animal sound

// Assign a new value to the 'sound' property
dog.sound = "Woof";

// Access the property again
console.log(dog.sound); // Output: Woof

// Check the prototype's property
console.log(animalPrototype.sound); // Output: Generic animal sound

// Call the inherited method
dog.speak(); // Output: Woof