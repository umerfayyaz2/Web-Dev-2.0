// functionFactory.js
function createGreeting(greeting) {
    return function(name) {
      return `${greeting}, ${name}!`;
    };
  }
  
  const sayHello = createGreeting("Hello");
  const sayHi = createGreeting("Hi");
  
  console.log(sayHello("Alice")); // Output: Hello, Alice!
  console.log(sayHi("Bob"));      // Output: Hi, Bob!