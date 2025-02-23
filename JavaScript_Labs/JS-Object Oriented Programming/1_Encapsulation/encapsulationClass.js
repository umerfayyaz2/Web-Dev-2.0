class Counter {
    constructor() {
      this._value = 0; // Private property (conventionally marked with underscore)
    }
  
    increment() { // Public method
      this._value++;
    }
  
    getValue() { // Public method
      return this._value;
    }
  }
  
  const counter = new Counter();
  counter.increment();
  counter.increment();
  console.log(counter.getValue()); // Output: 2
  
  // Attempting to modify _value directly is discouraged
  // counter._value = 10; // Not recommended