// Define a prototype object
let animal = {
    speak(line) {
        console.log(`The ${this.type} animal says '${line}'`);
    }
};

// Create an object with the prototype
let dog = Object.create(animal);
dog.type = "dog";
dog.speak("Woof!"); // Output: The dog animal says 'Woof!'

// Create another object with the same prototype
let cat = Object.create(animal);
cat.type = "cat";
cat.speak("Meow!"); // Output: The cat animal says 'Meow!'