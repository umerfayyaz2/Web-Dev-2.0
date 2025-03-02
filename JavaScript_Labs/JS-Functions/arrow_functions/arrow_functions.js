// 📌 1. Arrow Function Syntax

// A. Basic Syntax
function add(a, b) {
    return a + b;
}

const addArrow = (a, b) => {
    return a + b;
};
console.log('1A:', addArrow(5, 3)); // Output: 8

// B. Single-Parameter Arrow Functions
const square = (num) => {
    return num * num;
};

const squareShort = num => num * num;
console.log('1B:', square(4), squareShort(4)); // Output: 16 16

// C. Concise Body (Implicit Return)
const multiply = (x, y) => x * y;
console.log('1C:', multiply(3, 4)); // Output: 12

// D. Empty Parameters
const greet = () => console.log('1D:', "Hello, User!");
greet(); // Output: Hello, User!


// 📌 2. Implicit Return
const getFullName = (first, last) => `${first} ${last}`;
console.log('2:', getFullName("Umer", "Ahmed")); // Output: Umer Ahmed


// 📌 3. Lexical this Binding

// A. Regular Function
const person = {
    name: "Umer",
    greet: function() {
        console.log('3A:', "Hello, " + this.name);
    }
};
person.greet(); // Output: Hello, Umer

// B. Arrow Function
const personArrow = {
    name: "Umer",
    greet: () => {
        console.log('3B:', "Hello, " + this.name);
    }
};
personArrow.greet(); // Output: Hello, undefined

// Fixed Example
const personFixed = {
    name: "Umer",
    greet: function() {
        const inner = () => console.log('3B Fixed:', "Hello, " + this.name);
        inner();
    }
};
personFixed.greet(); // Output: Hello, Umer


// 📌 4. No arguments Object
function regularFunction() {
    console.log('4 Regular:', arguments);
}
regularFunction(1, 2, 3);

// Arrow function (commented to prevent error)
// const arrowFunction = () => {
//     console.log(arguments);
// };
// arrowFunction(1, 2, 3);

const arrowWithRest = (...args) => {
    console.log('4 Rest Args:', args);
};
arrowWithRest(1, 2, 3); // Output: [1, 2, 3]


// 📌 5. No new Keyword
// const Person = (name) => {
//     this.name = name;
// };
// const obj = new Person("Umer"); // TypeError

function PersonFixed(name) {
    this.name = name;
}
const obj = new PersonFixed("Umer");
console.log('5:', obj.name); // Output: Umer


// 📌 6. Callback Example
const numbers = [1, 2, 3, 4];
const squared = numbers.map(num => num * num);
console.log('6:', squared); // Output: [1, 4, 9, 16]


// 📌 7. Return Statements
const multiplyImplicit = (a, b) => a * b;
console.log('7A:', multiplyImplicit(4, 5)); // Output: 20

const sum = (a, b) => {
    console.log('7B:', "Adding numbers...");
    return a + b;
};
console.log(sum(5, 10)); // Output: 15


// 📌 8. Parameter Destructuring
const printDetails = ({ name, age }) => {
    console.log(`8: Name: ${name}, Age: ${age}`);
};
const user = { name: "Umer", age: 22 };
printDetails(user); // Output: Name: Umer, Age: 22


// 📌 9. Default Parameters
const greetUser = (name = "Guest") => console.log(`9: Hello, ${name}!`);
greetUser();      // Output: Hello, Guest!
greetUser("Umer"); // Output: Hello, Umer!