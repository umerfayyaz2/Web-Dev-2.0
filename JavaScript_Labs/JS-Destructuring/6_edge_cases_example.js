// Attempting to destructure null throws an error
try {
    let { name } = null;
  } catch (error) {
    console.log("Error:", error.message); // Output: Cannot destructure property 'name' of 'null'
  }
  
  // Partial destructuring
  let [first, , third] = [1, 2, 3];
  console.log("First:", first, "Third:", third); // Output: 1 3