// privateCounter.js
function createCounter() {
    let count = 0; // Private variable
  
    return {
      increment: function() {
        count++;
        return count;
      },
      decrement: function() {
        count--;
        return count;
      },
      reset: function() {
        count = 0;
        return count;
      },
      getCount: function() {
        return count;
      }
    };
  }
  
  const counter = createCounter();
  console.log(counter.increment()); // Output: 1
  console.log(counter.increment()); // Output: 2
  console.log(counter.decrement()); // Output: 1
  console.log(counter.reset());     // Output: 0
  console.log(counter.getCount());  // Output: 0