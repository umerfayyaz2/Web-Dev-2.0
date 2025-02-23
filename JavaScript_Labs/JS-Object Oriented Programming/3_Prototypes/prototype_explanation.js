// Create an empty object
let empty = {};

// Access the toString method from the prototype chain
console.log(empty.toString); // Output: function toString() { [native code] }
console.log(empty.toString()); // Output: [object Object]

// Check the prototype of an empty object
console.log(Object.getPrototypeOf({}) === Object.prototype); // Output: true

// Check the prototype of Object.prototype
console.log(Object.getPrototypeOf(Object.prototype)); // Output: null

// Check the prototype of Math.max (a function)
console.log(Object.getPrototypeOf(Math.max) === Function.prototype); // Output: true

// Check the prototype of an array
console.log(Object.getPrototypeOf([]) === Array.prototype); // Output: true