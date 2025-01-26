// **Case Study on Environment and Bindings in JavaScript**

// ### Introduction
// The environment in JavaScript is the context in which code is executed, 
// determining the set of available bindings (associations of names to values).

// ### The Environment in JavaScript
// The environment in JavaScript provides access to built-in objects, variables, functions, etc.
// It is essentially the scope that governs what can be accessed at runtime.

// ### Types of Bindings in JavaScript

// 1. **Built-in Bindings**
// Built-in bindings are available globally in the JavaScript environment and are part of JavaScript's core functionality.

// Example: Using `console` (Built-in Binding)
console.log("This is a built-in binding!"); // `console` is globally available

// Example: Using `Math` (Built-in Binding)
let randomNumber = Math.random(); // `Math` is available globally
console.log("Random Number:", randomNumber);

// Example: Using `JSON` (Built-in Binding)
let obj = { name: "Alice", age: 25 };
let jsonString = JSON.stringify(obj); // Serializing an object to JSON string
console.log("JSON String:", jsonString);

// Example: Using `Date` (Built-in Binding)
let currentDate = new Date(); // `Date` object to fetch current date and time
console.log("Current Date:", currentDate);

// 2. **User-Defined Bindings**
// User-defined bindings are created by the programmer, typically variables or functions that are specific to the program.

// Example: User-Defined Variables
let age = 30; // 'age' is a user-defined binding
let name = "John"; // 'name' is a user-defined binding

// Example: User-Defined Function
function greet() {
  console.log("Hello, world!"); // 'greet' is a user-defined binding
}
greet(); // Calling the user-defined function

// 3. **Global Bindings**
// Global bindings exist in the global scope, and they can be accessed anywhere in the program.

// Example: Global Variable in Browser
let globalVar = "I am a global variable!";
console.log(globalVar); // Accessible anywhere

// In the browser, `window` is the global object
console.log(window); // Accessing the global object (window)

// In Node.js, `process` is a global object
console.log(process.argv); // Accessing command-line arguments in Node.js

// 4. **Local Bindings**
// Local bindings exist only within the function or block they are declared. They are not accessible outside that scope.

// Example: Local Bindings
function greetPerson() {
  let greeting = "Hello, John!"; // 'greeting' is a local binding
  console.log(greeting); // Works here
}
greetPerson();
// console.log(greeting); // Error: 'greeting' is not accessible outside the function

// ### Environments in Different Contexts

// **Browser Environment**
// In the browser, JavaScript has access to global objects like `window`, `document`, and `navigator`.

// Example: Using `window` (Global object in Browser)
window.alert("Hello from the browser!");

// Example: Using `document` to interact with DOM
document.body.innerHTML = "<h1>Welcome to JavaScript!</h1>";

// Example: Using `navigator` to get browser info
console.log(navigator.userAgent);

// **Node.js Environment**
// In Node.js, the environment provides bindings for server-side operations such as file system and process management.

// Example: Using `process` to access command-line arguments (Node.js)
console.log(process.argv); // Logs the command-line arguments passed to the script

// Example: Using `__dirname` to get the current directory (Node.js)
console.log("__dirname:", __dirname); // Logs the current directory of the module

// Example: Using `fs` (File System module in Node.js)
const fs = require('fs');
fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log("File Content:", data); // Reading a file's content in Node.js
});

// ### Conclusion
// The JavaScript environment determines which bindings are available at runtime. These bindings can be built-in (e.g., `Math`, `console`), user-defined (e.g., variables, functions), or scoped locally (e.g., inside a function). The environment differs between browser and Node.js contexts, each providing its own set of global objects and capabilities.

// ### Key Takeaways
// 1. **Built-in Bindings** are always available (e.g., `console`, `Math`, `JSON`).
// 2. **User-Defined Bindings** are variables and functions created by the programmer.
// 3. **Global Bindings** are accessible throughout the program.
// 4. **Local Bindings** are scoped to functions or blocks and are not accessible outside.
// 5. **Browser vs Node.js Environments**: Different global objects (e.g., `window` in the browser, `process` in Node.js).

