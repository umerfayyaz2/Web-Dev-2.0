// Create an array of user objects
const users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 }
  ];
  
  // Accessing elements
  console.log(users[1].name); // Output: "Bob"
  
  // Adding a new user
  users.push({ name: "David", age: 40 });
  console.log(users);
  
  // Iterating over the array
  users.forEach((user) => {
    console.log(`${user.name} is ${user.age} years old.`);
  });