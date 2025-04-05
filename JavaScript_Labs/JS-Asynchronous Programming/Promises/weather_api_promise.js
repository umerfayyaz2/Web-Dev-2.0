function fetchWeatherData(city) {
    return new Promise((resolve, reject) => {
        const url = `https://api.weather.com/data/${city}`;
        // Simulate a network request
        setTimeout(() => {
            if (city === 'InvalidCity') {
                reject(new Error('City not found')); // Reject on failure
            } else {
                resolve({ city, temperature: Math.random() * 100 }); // Resolve on success
            }
        }, 1000);
    });
}

fetchWeatherData('NewYork')
    .then(data => console.log(`Weather in ${data.city}: ${data.temperature}°C`))
    .catch(error => console.error('Error:', error.message));