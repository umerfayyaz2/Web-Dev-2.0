// Create a new Map
let ages = new Map();

// Add key-value pairs
ages.set("Boris", 39);
ages.set("Liang", 22);
ages.set("Júlia", 62);

// Access values
console.log(`Júlia is ${ages.get("Júlia")}`); // Output: Júlia is 62

// Check for keys
console.log("Is Jack's age known?", ages.has("Jack")); // Output: Is Jack's age known? false
console.log(ages.has("toString")); // Output: false