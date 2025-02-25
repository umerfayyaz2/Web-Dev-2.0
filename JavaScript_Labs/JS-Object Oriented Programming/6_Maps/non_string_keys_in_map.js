// Create a Map
let map = new Map();

// Use objects as keys
let objKey1 = { id: 1 };
let objKey2 = { id: 2 };

// Add key-value pairs
map.set(objKey1, "First object");
map.set(objKey2, "Second object");

// Access values
console.log(map.get(objKey1)); // Output: First object
console.log(map.get(objKey2)); // Output: Second object