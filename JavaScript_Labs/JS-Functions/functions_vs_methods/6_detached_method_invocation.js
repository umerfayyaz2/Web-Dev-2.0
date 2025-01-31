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
  
  // Recommendations:
  // - **Use methods** when logic is tightly coupled to an object’s state.
  // - **Use functions** for stateless utilities or cross-object operations.
  // - Avoid arrow functions for methods that require `this` binding.