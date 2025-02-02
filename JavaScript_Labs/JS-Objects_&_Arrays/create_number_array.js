// Create an array of numbers
const numbers = [1, 2, 3, 4, 5];

// Accessing elements
console.log(numbers[0]); // Output: 1 (first element)
console.log(numbers.length); // Output: 5 (number of elements)

// Modifying elements
numbers[2] = 10;
console.log(numbers); // Output: [1, 2, 10, 4, 5]

// Adding elements
numbers.push(6);
console.log(numbers); // Output: [1, 2, 10, 4, 5, 6]

// Iterating over the array
numbers.forEach((number) => {
  console.log(number);
});