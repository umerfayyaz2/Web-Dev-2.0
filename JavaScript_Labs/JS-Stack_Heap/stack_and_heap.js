// 1. Stack and Heap Overview
// --------------------------

// Stack stores primitives, heap stores non-primitives
let stackNumber = 42; // Stored in stack
let heapObject = { name: "John" }; // Object in heap, reference in stack

// 2. Primitive vs Non-Primitive Data Types
// ----------------------------------------
// Primitive type example
let primitive1 = "Hello";
let primitive2 = primitive1; // Value copied

// Non-primitive type example
let nonPrimitive1 = { id: 1 };
let nonPrimitive2 = nonPrimitive1; // Reference copied

// 3. By Value vs By Reference
// ---------------------------
console.log("\n=== By Value vs By Reference ===");

// Primitive (By Value)
let a = 10;
let b = a;
b = 20;
console.log(`a: ${a}, b: ${b}`); // a:10, b:20

// Non-Primitive (By Reference)
let obj1 = { value: 30 };
let obj2 = obj1;
obj2.value = 40;
console.log(`obj1: ${obj1.value}, obj2: ${obj2.value}`); // Both 40

// 4. Shallow Copy vs Deep Copy
// ----------------------------
console.log("\n=== Copying Objects ===");

// Shallow Copy
let original = { 
  name: "Umer", 
  address: { city: "Lahore" } 
};
let shallowCopy = { ...original }; // Spread operator

shallowCopy.name = "Ali";
shallowCopy.address.city = "Karachi";
console.log("Original:", original.address.city); // Karachi
console.log("Shallow Copy:", shallowCopy.address.city); // Karachi

// Deep Copy
let deepCopy = JSON.parse(JSON.stringify(original));
deepCopy.address.city = "Islamabad";
console.log("Original:", original.address.city); // Karachi
console.log("Deep Copy:", deepCopy.address.city); // Islamabad

// 5. Practical Scenarios
// ----------------------
console.log("\n=== Function Behavior ===");

// Primitive in function
function modifyPrimitive(val) {
  val = 100;
  console.log("Inside function:", val); // 100
}

let num = 50;
modifyPrimitive(num);
console.log("Outside function:", num); // 50

// Object in function
function modifyObject(obj) {
  obj.name = "Changed";
}

let person = { name: "Original" };
modifyObject(person);
console.log("Modified object:", person.name); // Changed

// 6. Stack Overflow Example
// -------------------------
console.log("\n=== Stack Overflow ===");

function triggerOverflow() {
  function infiniteRecursion() {
    infiniteRecursion(); // No base case
  }

  try {
    infiniteRecursion();
  } catch (error) {
    console.error("Error:", error.message); // Stack overflow
  }
}

triggerOverflow();

// Key Takeaways as Comments
// --------------------------
/*
- Primitives: Stored in stack, copied by value
- Non-primitives: Stored in heap, copied by reference
- Shallow copies share nested references
- Deep copies create completely independent duplicates
- Functions receive primitives as copies and objects as references
- Recursion without base case causes stack overflow
*/