function fetchData(callback) {
    setTimeout(() => {
        const data = { name: 'John', age: 30 };
        callback(null, data); // Pass null for no error
    }, 1000);
}

function processData(data, callback) {
    setTimeout(() => {
        const processedData = { ...data, role: 'Developer' };
        callback(null, processedData);
    }, 1000);
}

function saveData(processedData, callback) {
    setTimeout(() => {
        console.log('Data saved:', processedData);
        callback(null, 'Success');
    }, 1000);
}

fetchData((error, data) => {
    if (error) return console.error(error);
    processData(data, (error, processedData) => {
        if (error) return console.error(error);
        saveData(processedData, (error, result) => {
            if (error) return console.error(error);
            console.log(result); // Output: Success
        });
    });
});