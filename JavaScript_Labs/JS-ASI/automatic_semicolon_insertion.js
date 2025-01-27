// Example 1: Return Statement with No Semicolon
function getNumber() {
    return
    5;
  }
  
  console.log(getNumber());  // Output: undefined
  
  // Explanation: Due to ASI, a semicolon is inserted after `return`, causing the function to return `undefined`.
  
  // Example 2: Assignment with Line Breaks
  let x = 10;
  let y = 20;
  
  x
  = y;
  
  console.log(x);  // Output: 10
  
  // Explanation: ASI inserts a semicolon after `x = 10`, causing the assignment `x = y` to be a separate expression. x remains 10.
  
  // Example 3: Function with Missing Semicolon in Return
  function add(a, b) {
    return
      a + b;  // ASI inserts semicolon after return
  }
  
  console.log(add(2, 3));  // Output: undefined
  
  // Explanation: The line break after `return` causes ASI to insert a semicolon, ending the return statement prematurely.
  
  // Pitfalls of ASI
  // ASI can lead to unintended behavior, hard-to-debug errors, and inconsistent code formatting, especially in larger codebases.
  
  // Example 4: Minification and ASI Issue
  // Before Minification
  function multiply(a, b) {
    return
    a * b;
  }
  
  console.log(multiply(3, 4));  // Output: undefined
  
  // After Minification (structure becomes harder to debug)
  function multiply(a,b){return a*b;}console.log(multiply(3,4));
  
  // Explanation: The line break causes ASI to insert a semicolon after `return`, leading to undefined being returned.
  
  // Example 5: Complex Expressions and Minification
  function check() {
    return
    x > 5 ? 'Greater' : 'Smaller';
  }
  
  console.log(check());  // Output: undefined
  
  // Minified version
  function check(){return x>5?'Greater':'Smaller';}console.log(check());
  
  // Explanation: ASI inserts a semicolon after `return` due to the line break, making the ternary operation unreachable.
  
  // Solution: Avoiding ASI Pitfalls
  // 1. Always include semicolons explicitly
  // 2. Avoid line breaks after return or assignment statements
  // 3. Use a linter like ESLint to catch potential ASI issues before runtime
  // 4. Handle code minification carefully to avoid removing critical formatting
  
  // Example 6: Corrected Code with Explicit Semicolon
  function multiply(a, b) {
    return a * b;  // Explicit semicolon
  }
  
  console.log(multiply(3, 4));  // Output: 12
  
  // Example 7: Correct Usage of `return` with Ternary Operator
  function check() {
    return x > 5 ? 'Greater' : 'Smaller';  // No line break after return
  }
  
  console.log(check());  // Output: 'Greater' or 'Smaller', depending on x
  
  // Example 8: Combining Multiple Return Conditions
  function evaluate(num) {
    return num > 10
      ? 'Greater than 10'
      : num < 5
      ? 'Less than 5'
      : 'Between 5 and 10';  // Correct ternary logic
  }
  
  console.log(evaluate(3));  // Output: Less than 5
  console.log(evaluate(8));  // Output: Between 5 and 10
  console.log(evaluate(12)); // Output: Greater than 10
  
  // Example 9: Using Code Minification with Caution
  // Before minification
  const greet = (name) => {
    return `Hello, ${name}!`;  // Correctly formatted
  };
  
  console.log(greet("Alice"));
  
  // After Minification
  const greet=name=>{return`Hello, ${name}!`};console.log(greet("Alice"));
  
  // Explanation: Minified code remains intact as `return` and expression are correctly formatted.
  // However, aggressive minification could introduce ASI issues if line breaks are removed incorrectly.
  
  // Conclusion:
  // Automatic Semicolon Insertion (ASI) can simplify coding but may lead to subtle bugs.
  // Understanding ASI, explicit semicolon usage, and careful handling of line breaks can help avoid unexpected issues.
  // Minification can obscure these issues further, so developers should follow best practices to ensure reliable behavior in production.
  