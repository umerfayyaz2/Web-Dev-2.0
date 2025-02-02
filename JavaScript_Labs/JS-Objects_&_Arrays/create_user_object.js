// Create an object representing a user
const user = {
    name: "Alice",
    age: 25,
    isAdmin: false,
    address: {
      city: "New York",
      zipCode: "10001"
    }
  };
  
  // Accessing properties
  console.log(user.name); // Output: "Alice"
  console.log(user.address.city); // Output: "New York"
  
  // Modifying properties
  user.age = 26;
  console.log(user.age); // Output: 26
  
  // Adding new properties
  user.email = "alice@example.com";
  console.log(user.email); // Output: "alice@example.com"