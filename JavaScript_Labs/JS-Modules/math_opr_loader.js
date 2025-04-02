// Importing specific functions from the module
import { add, subtract, multiply, divide } from './math_operations.js';

console.log(add(5, 3)); // Output: 8
console.log(subtract(10, 4)); // Output: 6
console.log(multiply(6, 7)); // Output: 42
console.log(divide(8, 2)); // Output: 4

try {
    console.log(divide(5, 0)); // Throws an error
} catch (error) {
    console.error(error.message); // Output: Division by zero is not allowed.
}