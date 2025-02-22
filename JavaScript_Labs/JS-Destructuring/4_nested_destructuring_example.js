// Array example
let nestedArray = [1, [2, 3]];
let [first, [second, third]] = nestedArray;
console.log("First:", first, "Second:", second, "Third:", third); // Output: 1 2 3

// Object example
let nestedObject = { a: { b: 10, c: 20 }, d: 30 };
let { a: { b, c }, d } = nestedObject;
console.log("b:", b, "c:", c, "d:", d); // Output: 10 20 30