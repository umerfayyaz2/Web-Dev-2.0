// Override Array.prototype.toString
Array.prototype.toString = function() {
    return `[Custom Array: ${this.join(", ")}]`;
};

// Test the overridden method
let numbers = [1, 2, 3];
console.log(numbers.toString()); // Output: [Custom Array: 1, 2, 3]

// Compare with Object.prototype.toString
console.log(Object.prototype.toString.call(numbers)); // Output: [object Array]