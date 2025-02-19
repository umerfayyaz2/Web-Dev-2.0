// Case Study: Understanding JavaScript Coercion

// 1. Coercion with Arithmetic Operators

// Addition (+)
console.log(5 + "5"); // "55" (number coerced to string, concatenation)
console.log("5" + 5); // "55" (same as above)
console.log(5 + 5); // 10 (both operands are numbers, normal addition)

// Subtraction, Multiplication, Division, Modulus (-, *, /, %)
console.log("10" - 2); // 8 (string coerced to number)
console.log("10" * "2"); // 20 (both strings coerced to numbers)

// 2. Coercion to Boolean

// Falsy Values (false, 0, -0, "", null, undefined,   NaN)
if (0) {
    console.log("This won't run");
} else {
    console.log("This will run"); // "This will run"
}

// Truthy Values (non-empty strings, numbers, objects, etc.)
if ("hello") {
    console.log("This will run"); // "This will run"
}

// 3. Common Unpredictable Cases (Gotchas)

// Empty String vs. Number: "" coerced to 0
console.log("" == 0); // true (empty string coerced to 0)

// Array vs. String: [] coerced to "", [1] coerced to "1"
console.log([] == ""); // true (empty array coerced to "")
console.log([1] == "1"); // true (array [1] coerced to "1")

// Null and Undefined: null == undefined is true, null != 0
console.log(null == 0); // false (null is not coerced to 0)
console.log(null == undefined); // true (null and undefined are equal)

// NaN Comparison: NaN is not equal to anything, including itself
console.log(NaN == NaN); // false (NaN is not equal to anything, even itself)

// Conclusion: Be aware of coercion rules to avoid unexpected results and errors.