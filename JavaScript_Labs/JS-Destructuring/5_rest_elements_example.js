// Array example
let [first, ...rest] = [1, 2, 3, 4];
console.log("First:", first, "Rest:", rest); // Output: 1 [2, 3, 4]

// Object example
let { a, ...others } = { a: 1, b: 2, c: 3 };
console.log("a:", a, "Others:", others); // Output: 1 { b: 2, c: 3 }