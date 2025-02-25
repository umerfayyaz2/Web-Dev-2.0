// Create a Map
let ages = new Map();
ages.set("Boris", 39);
ages.set("Liang", 22);
ages.set("Júlia", 62);

// Iterate over keys
for (let key of ages.keys()) {
    console.log(key); // Output: Boris, Liang, Júlia
}

// Iterate over values
for (let value of ages.values()) {
    console.log(value); // Output: 39, 22, 62
}

// Iterate over entries (key-value pairs)
for (let [key, value] of ages.entries()) {
    console.log(`${key} is ${value}`); // Output: Boris is 39, Liang is 22, Júlia is 62
}