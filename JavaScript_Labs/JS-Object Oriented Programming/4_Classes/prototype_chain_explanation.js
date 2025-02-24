class Animal {
    constructor(type) {
        this.type = type;
    }

    speak() {
        console.log(`The ${this.type} animal speaks.`);
    }
}

let lion = new Animal("lion");

console.log(Object.getPrototypeOf(lion) === Animal.prototype); // Output: true
console.log(Object.getPrototypeOf(Animal) === Function.prototype); // Output: true