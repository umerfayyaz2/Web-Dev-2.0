function createCalculator() {
    let result = 0;
  
    return {
      add: function(x) {
        result += x;
        return result;
      },
      subtract: function(x) {
        result -= x;
        return result;
      },
      multiply: function(x) {
        result *= x;
        return result;
      },
      divide: function(x) {
        result /= x;
        return result;
      },
      reset: function() {
        result = 0;
        return result;
      },
      getResult: function() {
        return result;
      }
    };
  }
  
  const calculator = createCalculator();
  console.log(calculator.add(5));      // Output: 5
  console.log(calculator.subtract(2)); // Output: 3
  console.log(calculator.multiply(3)); // Output: 9
  console.log(calculator.divide(3));   // Output: 3
  console.log(calculator.reset());     // Output: 0