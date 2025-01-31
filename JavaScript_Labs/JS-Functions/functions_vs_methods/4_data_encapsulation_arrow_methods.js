// 4. Data Encapsulation
// Problem: A standalone function cannot directly modify an object’s state unless explicitly passed.
// Solution: Use a method to encapsulate logic with the object’s data.

// Without Encapsulation (Function):
const player = { score: 0 };

// Function requires passing the object
function incrementScore(obj) {
  obj.score += 1;
}

incrementScore(player);
console.log(player.score); // Output: 1

// With Encapsulation (Method):
const playerWithMethod = {
  score: 0,
  increment() {
    this.score += 1; // Directly modifies the object's state
  }
};

playerWithMethod.increment();
console.log(playerWithMethod.score); // Output: 1