// Case Study: Template Literals in JavaScript

// Introduction: Template literals allow enhanced flexibility in string handling.
// They enable multi-line strings, embedding expressions, and handling special characters effortlessly.

// 1. Multi-line Strings
// Template literals allow multi-line strings without escape characters or string concatenation.
let multiLineString = `This is a
multi-line string.
It can span across multiple lines.`;
console.log(multiLineString); // Output: This is a\nmulti-line string.\nIt can span across multiple lines.

// 2. Embedding Expressions
// You can embed expressions directly within a string using ${}. This allows dynamic string creation.
let a = 10;
let b = 20;
console.log(`The sum of a and b is: ${a + b}`); // Output: The sum of a and b is: 30

// 3. Handling Special Characters Without Escape Sequences

// Double Quotes in Strings
let quote = `She said, "Hello!"`;
console.log(quote);  // Output: She said, "Hello!"

// Single Quotes in Strings
let singleQuoteMessage = `It's a sunny day!`;
console.log(singleQuoteMessage);  // Output: It's a sunny day!

// Backslashes in Strings
let filePath = `C:\\Users\\Documents\\file.txt`;
console.log(filePath);  // Output: C:\Users\Documents\file.txt

// 4. Expression Evaluation and Complex Operations
// Template literals allow complex operations or functions to be executed directly within the string.
let x = 5, y = 3;
let result = `The result of ${x} multiplied by ${y} is ${x * y}`;
console.log(result);  // Output: The result of 5 multiplied by 3 is 15

// 5. Use Cases in Real-world Applications

// Dynamic HTML Rendering
// Template literals are ideal for dynamically creating HTML content, especially in SPAs.
let name = "Alice";
let age = 25;
let html = `
  <div>
    <h1>Hello, ${name}!</h1>
    <p>You are ${age} years old.</p>
  </div>
`;
document.body.innerHTML = html;

// SQL Query Construction (Be cautious with user input to avoid SQL injection)
let table = "users";
let column = "name";
let value = "Alice";
let query = `SELECT * FROM ${table} WHERE ${column} = '${value}'`;
console.log(query);  // Output: SELECT * FROM users WHERE name = 'Alice'

// Advantages of Template Literals

// Readability: Eliminates the need for string concatenation and escape sequences, improving code clarity.
// Flexibility: Allows embedding expressions, multi-line strings, and handling special characters without escaping.
// Performance: Template literals might improve performance in complex string constructions by reducing concatenation.


// Disadvantages of Template Literals

// Security Concerns: Avoid constructing strings with user input in untrusted contexts (like SQL queries) without sanitization to prevent SQL injection.
// Browser Support: Template literals are supported in modern browsers but may require transpilation for older environments like Internet Explorer.

// Conclusion: Template literals provide a cleaner, more flexible approach to string handling in JavaScript.
// They simplify string interpolation, multi-line text, and embedding expressions. However, use caution when dealing with user input in contexts like SQL.
