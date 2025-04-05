function fetchResource(url) {
    console.log(`Fetching ${url}...`);
    // Simulate a delay of 2 seconds
    sleep(2000); // Hypothetical function to simulate blocking
    console.log(`Fetched ${url}`);
    return `Data from ${url}`;
}

const resource1 = fetchResource('https://api.example.com/resource1');
const resource2 = fetchResource('https://api.example.com/resource2');

console.log(`Combined result: ${resource1} + ${resource2}`);