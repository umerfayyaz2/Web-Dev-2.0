// Define an object with private and public properties
const Counter = {
    _value: 0, // Private property (indicated by underscore)
    increment() { // Public method
      this._value++;
    },
    getValue() { // Public method to access private state
      return this._value;
    }
  };
  
  // Use the object
  Counter.increment();
  Counter.increment();
  console.log(Counter.getValue()); // Output: 2
  
  // Attempting to modify the private property directly will fail
  console.log(Counter._value); // Output: 0 (not recommended to access)