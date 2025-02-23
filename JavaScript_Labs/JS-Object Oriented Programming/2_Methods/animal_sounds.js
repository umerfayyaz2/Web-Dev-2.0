function makeSound(sound) {
    console.log(`The ${this.species} says '${sound}'`);
}

let dog = { species: "dog", makeSound };
let cat = { species: "cat", makeSound };

dog.makeSound("Woof!"); // Output: The dog says 'Woof!'
cat.makeSound("Meow!"); // Output: The cat says 'Meow!'