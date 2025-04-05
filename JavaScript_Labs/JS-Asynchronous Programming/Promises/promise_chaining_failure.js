function fetchData(url) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (url === 'error') {
                reject(new Error('Invalid URL'));
            } else {
                resolve(`Data fetched from ${url}`);
            }
        }, 1000);
    });
}

function processData(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof data !== 'string') {
                reject(new Error('Invalid data type'));
            } else {
                resolve(`Processed: ${data.toUpperCase()}`);
            }
        }, 1000);
    });
}

fetchData('https://example.com')
    .then(data => processData(data))
    .then(result => console.log(result)) // Output: Processed: DATA FETCHED FROM HTTPS://EXAMPLE.COM
    .catch(error => console.error('Error:', error.message));