function createCounter() {
    let _value = 0; // Private variable (encapsulated within the closure)
  
    return {
      increment() { // Public method
        _value++;
      },
      getValue() { // Public method
        return _value;
      }
    };
  }
  
  const counter = createCounter();
  counter.increment();
  counter.increment();
  console.log(counter.getValue()); // Output: 2
  
  // Attempting to access _value directly will throw an error
  // console.log(counter._value); // Error: undefined