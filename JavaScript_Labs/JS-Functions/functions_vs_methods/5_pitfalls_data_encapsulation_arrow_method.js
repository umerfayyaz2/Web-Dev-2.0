// 5. Arrow Functions as Methods
// Pitfall: Arrow functions do not bind their own `this`.

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