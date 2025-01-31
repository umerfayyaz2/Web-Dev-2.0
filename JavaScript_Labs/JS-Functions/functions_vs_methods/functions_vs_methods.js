// Case Study: Functions vs. Methods in JavaScript

// 1. Standalone Function Example
// Use Case: A utility function that calculates the area of a rectangle.
function calculateArea(width, height) {
    return width * height;
  }
  
  // Usage: Pass arguments explicitly
  console.log(calculateArea(4, 5)); // Output: 20
  
  
  // 2. Object Method Example
  // Use Case: A `user` object with a method to update its email.
  const user = {
    name: "Alice",
    email: "alice@example.com",
  
    // Method to update email
    updateEmail(newEmail) {
      this.email = newEmail; // Uses `this` to access object properties
      return `Email updated to: ${this.email}`;
    }
  };
  
  // Invoke method directly on the object
  console.log(user.updateEmail("alice_new@example.com")); // Output: "Email updated to: alice_new@example.com"
  console.log(user.email); // Output: "alice_new@example.com"
  
  
  // 3. Context (`this`) Behavior Comparison
  // Function:
  function logThis() {
    console.log(this); // `this` refers to the global object (non-strict mode) or undefined (strict mode)
  }
  
  logThis(); // Output (non-strict): Window (browser) / global (Node.js)
  
  // Method:
  const car = {
    brand: "Tesla",
    getBrand() {
      console.log(this.brand); // `this` refers to the `car` object
    }
  };
  
  car.getBrand(); // Output: "Tesla"
  
  
  // 4. Data Encapsulation
  // Problem: A standalone function cannot directly modify an object’s state unless explicitly passed.
  // Solution: Use a method to encapsulate logic with the object’s data.
  
  // Without Encapsulation (Function):
  const player = { score: 0 };
  
  // Function requires passing the object
  function incrementScore(obj) {
    obj.score += 1;
  }
  
  incrementScore(player);
  console.log(player.score); // Output: 1
  
  // With Encapsulation (Method):
  const playerWithMethod = {
    score: 0,
    increment() {
      this.score += 1; // Directly modifies the object's state
    }
  };
  
  playerWithMethod.increment();
  console.log(playerWithMethod.score); // Output: 1
  
  
  // 5. Arrow Functions as Methods
  // Pitfall: Arrow functions do not bind their own `this`.
  
  // Example:
  const counterWithArrow = {
    count: 0,
    increment: () => {
      this.count += 1; // `this` refers to the global scope, not the counter
    }
  };
  
  counterWithArrow.increment();
  console.log(counterWithArrow.count); // Output: 0 (no change)
  
  // Fix with Regular Function:
  const counterWithMethod = {
    count: 0,
    increment() {
      this.count += 1; // Correctly references `counter`
    }
  };
  
  counterWithMethod.increment();
  console.log(counterWithMethod.count); // Output: 1
  
  
  // 6. Detached Method Invocation
  // Problem: When a method is assigned to a variable, it loses its `this` context.
  // Example:
  const app = {
    data: 10,
    getData() {
      return this.data;
    }
  };
  
  const detachedGetData = app.getData;
  console.log(detachedGetData()); // Output: undefined (this.data is undefined)
  
  // Solution: Use `bind()` to preserve context:
  const boundGetData = app.getData.bind(app);
  console.log(boundGetData()); // Output: 10
  
  
  // Key Takeaways
  // - **Function**: Standalone block of code. Typically for stateless utilities.
  // - **Method**: A function attached to an object. Uses `this` to interact with the object's data.
  
  // Summary of differences
  const keyTakeaways = {
    functionVsMethod: [
      {
        Aspect: 'Definition',
        Function: 'Standalone block of code.',
        Method: 'Function attached to an object.',
      },
      {
        Aspect: '`this` Context',
        Function: 'Global/undefined (unless bound).',
        Method: 'Refers to the owning object.',
      },
      {
        Aspect: 'Data Access',
        Function: 'Requires explicit arguments.',
        Method: 'Directly via `this`.',
      },
      {
        Aspect: 'Use Case',
        Function: 'Reusable utilities (e.g., `Math.sqrt`)',
        Method: 'Object-specific logic (e.g., `array.push`)'
      }
    ]
  };
  
  console.table(keyTakeaways.functionVsMethod);
  
  
  // Recommendations:
  // - **Use methods** when logic is tightly coupled to an object’s state.
  // - **Use functions** for stateless utilities or cross-object operations.
  // - Avoid arrow functions for methods that require `this` binding.
  
  