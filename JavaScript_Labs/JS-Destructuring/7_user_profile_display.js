function displayUserProfile(user) {
    let { name, age, email } = user;
    console.log(`Name: ${name}, Age: ${age}, Email: ${email}`);
  }
  
  let user = { name: "Alice", age: 25, email: "alice@example.com" };
  displayUserProfile(user);
  // Output: Name: Alice, Age: 25, Email: alice@example.com