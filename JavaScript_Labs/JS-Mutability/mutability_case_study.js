// Case Study: Mutability in JavaScript

// Section 1: Immutable Types in JavaScript
// Primitive types like numbers, strings, and Booleans are immutable.
// Example: Strings cannot be modified directly.
let word = "cat";
word[1] = "r"; // Attempt to change 'a' to 'r'
console.log("Section 1: Immutable Types");
console.log("Original string:", word); // Output: "cat"
// Explanation: Strings in JavaScript are immutable. The original string remains unchanged.

// Section 2: Mutable Types in JavaScript
// Objects (including arrays) are mutable, meaning their properties can be changed.
// Example: Modifying an object's property.
let cart = { items: ["apple", "banana"], total: 0 };
cart.items.push("orange"); // Adding an item to the cart
cart.total += 5; // Updating the total
console.log("\nSection 2: Mutable Types");
console.log("Updated cart:", cart);
// Explanation: Objects in JavaScript are mutable, allowing dynamic updates to their properties.

// Section 3: Comparing Objects by Reference
// JavaScript compares objects using reference equality.
// Example: Comparing object references.
let object1 = { value: 10 };
let object2 = object1; // Both point to the same object
let object3 = { value: 10 }; // A new, separate object
console.log("\nSection 3: Comparing Objects by Reference");
console.log("object1 == object2:", object1 == object2); // Output: true
console.log("object1 == object3:", object1 == object3); // Output: false
// Explanation: Two objects are considered equal only if they refer to the exact same object in memory.

// Section 4: Modifying Object Properties
// Objects can have their properties added, removed, or modified after creation.
// Example: Modifying a property of an object.
let profile = { name: "Alice", age: 25 };
profile.age = 26; // Updating the user's age
console.log("\nSection 4: Modifying Object Properties");
console.log("Updated profile:", profile);
// Explanation: The `age` property of the `profile` object is updated to reflect the user's new age.

// Section 5: Const Bindings and Mutability
// Variables declared with `const` cannot be reassigned, but the object's contents can still be modified.
// Example: Modifying an object declared with `const`.
const score = { visitors: 0, home: 0 };
score.visitors = 1; // Allowed: Modifying object content
// score = { visitors: 1, home: 1 }; // Uncommenting this line will throw an error
console.log("\nSection 5: Const Bindings and Mutability");
console.log("Updated score:", score);
// Explanation: `const` prevents reassignment of the variable but does not make the object itself immutable.

// Section 6: Deep vs. Shallow Comparison
// JavaScript does not provide a built-in way to perform deep comparison of objects.
// Example: Implementing a custom deepEqual function.
function deepEqual(obj1, obj2) {
  if (obj1 === obj2) return true; // Same reference or primitive values
  if (typeof obj1 !== "object" || obj1 === null ||
      typeof obj2 !== "object" || obj2 === null) {
    return false; // One is not an object
  }

  let keys1 = Object.keys(obj1);
  let keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) return false; // Different number of keys

  for (let key of keys1) {
    if (!keys2.includes(key) || !deepEqual(obj1[key], obj2[key])) {
      return false; // Key mismatch or deep comparison fails
    }
  }

  return true; // All checks passed
}

let objA = { a: { b: 2 } };
let objB = { a: { b: 2 } };
console.log("\nSection 6: Deep vs. Shallow Comparison");
console.log("Shallow comparison:", objA == objB); // Output: false
console.log("Deep comparison:", deepEqual(objA, objB)); // Output: true
// Explanation: Shallow comparison checks references, while deep comparison recursively checks all nested properties.

// Section 7: Side Effects of Mutability
// Mutability can lead to unintended side effects when sharing objects between functions.
// Example: Modifying an array passed to a function.
function modifyArray(arr) {
  arr.push(4); // Modifies the original array
}

let numbers = [1, 2, 3];
modifyArray(numbers);
console.log("\nSection 7: Side Effects of Mutability");
console.log("Modified array:", numbers); // Output: [1, 2, 3, 4]
// Explanation: Passing an array to a function modifies the original array because arrays are mutable.