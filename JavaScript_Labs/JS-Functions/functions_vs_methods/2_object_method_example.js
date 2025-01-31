// 2. Object Method Example
// Use Case: A `user` object with a method to update its email.
const user = {
    name: "Alice",
    email: "alice@example.com",
  
    // Method to update email
    updateEmail(newEmail) {
      this.email = newEmail; // Uses `this` to access object properties
      return `Email updated to: ${this.email}`;
    }
  };
  
  // Invoke method directly on the object
  console.log(user.updateEmail("alice_new@example.com")); // Output: "Email updated to: alice_new@example.com"
  console.log(user.email); // Output: "alice_new@example.com"
  