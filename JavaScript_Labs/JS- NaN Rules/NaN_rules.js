// 1. Characteristics of NaN - not a number

// Type of NaN
console.log(typeof NaN); // "number"

// Self-Equality: NaN is the only value that is not equal to itself
console.log(NaN === NaN); // false

// Falsy Value: NaN is falsy in boolean context
if (NaN) {
  console.log("This won't run");
} else {
  console.log("This will run"); // "This will run"
}

//  2. When Does NaN Occur?

// Invalid Arithmetic Operations

// Non-numeric strings showing result in NaN
console.log("abc" - 2); // NaN
console.log("abc" * 3); // NaN

// Infinity divided by Infinity results in NaN
console.log(Infinity / Infinity); // NaN

// Square root of a negative number results in NaN
console.log(Math.sqrt(-1)); // NaN

// Invalid Number Conversion

// Number() function returns NaN for non-numeric values
console.log(Number("hello")); // NaN
console.log(Number(undefined)); // NaN

// parseInt() and parseFloat() also return NaN for non-numeric input
console.log(parseInt("abc123")); // NaN

//  3. How to Check for NaN

// isNaN() checks if a value is NaN but with coercion
console.log(isNaN("abc")); // true (coerced to NaN)
console.log(isNaN(123));   // false
console.log(isNaN(NaN));   // true

// Number.isNaN() is more reliable and checks explicitly for NaN
console.log(Number.isNaN("abc")); // false (no coercion)
console.log(Number.isNaN(NaN));   // true

//  4. Practical Example of NaN

// Detecting Invalid Input
let userInput = "abc";
let number = Number(userInput);

if (Number.isNaN(number)) {
  console.log("Invalid number");
} else {
  console.log("The number is:", number);
}

//  5. Why Does NaN Exist?

// Graceful error handling instead of crashing the program
// Follows the IEEE 754 standard for special numeric values like NaN and Infinity

//  6. Common NaN Edge Cases and Gotchas

// Concatenation vs. Arithmetic
console.log("5" - "2"); // 3 (strings coerced to numbers)
console.log("5" + "2"); // "52" (string concatenation)

// Operations with Undefined result in NaN
console.log(undefined + 1); // NaN

// Silent fails in comparisons with NaN
console.log(NaN > 5);  // false
console.log(NaN < 5);  // false
console.log(NaN == 5); // false

//  7. Summary
// - NaN stands for "Not-a-Number," but it is of type number.
// - NaN occurs when an operation produces an invalid number.
// - NaN is unique in that it is not equal to itself.
// - Use Number.isNaN() to reliably check for NaN.
// - Handle NaN properly to ensure smooth operation of your code, especially when dealing with user inputs or mathematical operations.