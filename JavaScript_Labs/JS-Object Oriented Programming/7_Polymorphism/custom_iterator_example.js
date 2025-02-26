// Define a custom iterable object
class Range {
    constructor(start, end) {
        this.start = start;
        this.end = end;
    }

    // Implement the iterator interface
    [Symbol.iterator]() {
        let current = this.start;
        const end = this.end;
        return {
            next() {
                if (current <= end) {
                    return { value: current++, done: false };
                } else {
                    return { done: true };
                }
            }
        };
    }
}

// Use the custom iterable in a for...of loop
const range = new Range(1, 5);
for (const num of range) {
    console.log(num); // Output: 1, 2, 3, 4, 5
}