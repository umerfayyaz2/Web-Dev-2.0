// Function to simulate fetching a resource from a URL
function fetchResource(url) {
    return new Promise((resolve) => {
        console.log(`Fetching ${url}...`);
        setTimeout(() => {
            console.log(`Fetched ${url}`);
            resolve(`Data from ${url}`);
        }, 2000); // Simulate a 2-second delay
    });
}

// Async function to combine resources from multiple URLs
async function combineResources(urls) {
    try {
        const resources = await Promise.all(urls.map(url => fetchResource(url)));
        console.log(`Combined result: ${resources.join(' + ')}`);
    } catch (error) {
        console.error('An error occurred:', error.message);
    }
}

// Example usage of the combineResources function
const urls = [
    'https://api.example.com/resource1',
    'https://api.example.com/resource2',
    'https://api.example.com/resource3'
];

combineResources(urls);