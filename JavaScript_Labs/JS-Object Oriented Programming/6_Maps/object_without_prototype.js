// Create an object with no prototype
let safeMap = Object.create(null);

// Add key-value pairs
safeMap.Boris = 39;
safeMap.Liang = 22;
safeMap.Júlia = 62;

// Check for keys
console.log("Is Jack's age known?", "Jack" in safeMap); // Output: Is Jack's age known? false
console.log("Is toString's age known?", "toString" in safeMap); // Output: Is toString's age known? false