Array.prototype.myReduce = function(callback, initialValue) {
    // `this` refers to the array on which `myReduce` is called
    let array = this;

    // Determine the starting index and initial accumulator value
    let accumulator = initialValue;
    let startIndex = 0;

    // If no initial value is provided, use the first element as the accumulator
    if (initialValue === undefined) {
        if (array.length === 0) {
            throw new TypeError("Reduce of empty array with no initial value");
        }
        accumulator = array[0];
        startIndex = 1; // Start iterating from the second element
    }

    // Iterate through the array and apply the callback
    for (let i = startIndex; i < array.length; i++) {
        accumulator = callback(accumulator, array[i], i, array);
    }

    // Return the final accumulated value
    return accumulator;
};