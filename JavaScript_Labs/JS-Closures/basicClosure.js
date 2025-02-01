// basicClosure.js
function outerFunction() {
    let outerVariable = "I'm from the outer function!";
  
    function innerFunction() {
      console.log(outerVariable); // Accessing outerVariable from the outer scope
    }
  
    return innerFunction;
  }
  
  const closureExample = outerFunction();
  closureExample(); // Output: I'm from the outer function!