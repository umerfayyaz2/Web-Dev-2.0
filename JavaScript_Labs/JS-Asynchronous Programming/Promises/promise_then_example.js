function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = Math.random() > 0.5; // Simulate random success/failure
            if (success) {
                resolve("Data fetched successfully.");
            } else {
                reject("Failed to fetch data.");
            }
        }, 1000); // Simulate a 1-second delay
    });
}

fetchData()
    .then(data => {
        console.log("Success:", data);
    })
    .catch(error => {
        console.error("Error:", error);
    });