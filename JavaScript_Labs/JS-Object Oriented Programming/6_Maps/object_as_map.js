// Define an object to act as a map
let ages = {
    Boris: 39,
    Liang: 22,
    Júlia: 62
};

// Accessing values using keys
console.log(`Júlia is ${ages["Júlia"]}`); // Output: Júlia is 62

// Checking if a key exists
console.log("Is Jack's age known?", "Jack" in ages); // Output: Is Jack's age known? false

// Unexpected behavior due to prototype inheritance
console.log("Is toString's age known?", "toString" in ages); // Output: Is toString's age known? true