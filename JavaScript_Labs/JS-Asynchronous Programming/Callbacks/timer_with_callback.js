function delayedGreeting(name, delay, callback) {
    console.log(`Waiting ${delay} milliseconds...`);
    setTimeout(() => {
        callback(`Hello, ${name}!`);
    }, delay);
}

delayedGreeting('Alice', 2000, (greeting) => {
    console.log(greeting); // Output: Hello, Alice!
});