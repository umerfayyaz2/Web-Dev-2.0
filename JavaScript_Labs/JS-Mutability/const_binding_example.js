const score = { visitors: 0, home: 0 };

// Allowed: Modifying object content
score.visitors = 1;

// Not allowed: Reassigning const binding
// score = { visitors: 1, home: 1 }; 

console.log(score);