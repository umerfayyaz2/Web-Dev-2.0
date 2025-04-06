function fetchData(url) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (url === 'error') {
                reject(new Error('Failed to fetch data'));
            } else {
                resolve(`Data from ${url}`);
            }
        }, Math.random() * 1000); // Random delay
    });
}

async function fetchWeather() {
    try {
        const tempUrl = 'https://api.example.com/current-temp';
        const forecastUrl = 'https://api.example.com/forecast';

        console.log('Fetching current temperature...');
        const currentTemp = await fetchData(tempUrl);
        console.log('Current Temperature:', currentTemp);

        console.log('Fetching forecast...');
        const forecast = await fetchData(forecastUrl);
        console.log('Forecast:', forecast);

        return { currentTemp, forecast };
    } catch (error) {
        console.error('Error fetching data:', error.message);
        throw error; // Propagate the error
    }
}

fetchWeather()
    .then(data => console.log('Weather Data:', data))
    .catch(error => console.error('Final Error:', error.message));