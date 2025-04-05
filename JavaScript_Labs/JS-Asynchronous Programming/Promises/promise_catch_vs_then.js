function divide(a, b) {
    return new Promise((resolve, reject) => {
        if (b === 0) {
            reject(new Error('Division by zero'));
        } else {
            resolve(a / b);
        }
    });
}

// Using catch
divide(10, 2)
    .then(result => console.log('Result:', result)) // Output: Result: 5
    .catch(error => console.error('Error:', error.message));

// Using second argument in then
divide(10, 0)
    .then(
        result => console.log('Result:', result),
        error => console.error('Error:', error.message) // Output: Error: Division by zero
    );