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
  