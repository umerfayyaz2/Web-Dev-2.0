// === Case Study: Understanding Hoisting in JavaScript ===

// --- 1. What is Hoisting? ---
console.log("// --- 1. What is Hoisting? ---");
console.log(myVar); // Output: undefined (var declaration is hoisted)
var myVar = 10;
console.log(myVar); // Output: 10 (assignment completes)

// --- 3. What Happens Without Hoisting? ---
console.log("\n// --- 3. Without Hoisting ---");
try {
  console.log(num); // Throws ReferenceError (let is in TDZ)
} catch (e) {
  console.log(`Error: ${e.message}`); // "Cannot access 'num' before initialization"
}
let num = 20; // Declaration after access attempt (TDZ ends here)

// --- 4. Hoisting with Different Declarations ---
console.log("\n// --- 4. Hoisting Variations ---");

// A. var Hoisting
console.log("// A. var:");
console.log(a); // Output: undefined (hoisted but uninitialized)
var a = 5;
console.log(a); // Output: 5

// B. let/const Hoisting (TDZ)
console.log("\n// B. let/const:");
try {
  console.log(b); // Throws ReferenceError (TDZ for let)
} catch (e) {
  console.log(`Error: ${e.message}`);
}
let b = 10; // TDZ ends here

// C. Function Hoisting
console.log("\n// C. Functions:");
greet(); // Output: "Hello, Umer!" (function declaration is fully hoisted)
function greet() {
  console.log("Hello, Umer!");
}

// Function Expression (Not Hoisted)
console.log("\n// Function Expression:");
try {
  hello(); // TypeError: hello is not a function (var is undefined)
} catch (e) {
  console.log(`Error: ${e.message}`);
}
var hello = function() {
  console.log("Hi!");
};

// --- 5. Temporal Dead Zone (TDZ) ---
console.log("\n// --- 5. Temporal Dead Zone ---");

// TDZ Example
try {
  console.log(myName); // ReferenceError (TDZ for let)
} catch (e) {
  console.log(`Error: ${e.message}`);
}
let myName = "Umer"; // TDZ ends here

// var vs let Comparison
console.log("\n// var vs let:");
console.log(x); // Output: undefined (var is hoisted)
var x = 10;
console.log(x); // Output: 10

try {
  console.log(y); // ReferenceError (let in TDZ)
} catch (e) {
  console.log(`Error: ${e.message}`);
}
let y = 20;
console.log(y); // Output: 20 (after initialization)

// --- 6. Practical Tips ---
console.log("\n// --- 6. Best Practices ---");

// A. Declare Variables First
console.log("// A. Declare First:");
let count = 0;
function increment() {
  count++;
  console.log(`Count: ${count}`);
}
increment(); // Output: 1

// B. Use const
console.log("\n// B. Use const:");
const PI = 3.1416;
console.log(PI); // Output: 3.1416

// C. Function Declarations
console.log("\n// C. Function Declarations:");
console.log(sum(5, 10)); // Output: 15 (hoisted)
function sum(a, b) {
  return a + b;
}