class Temperature {
    constructor(celsius) {
        this.celsius = celsius; // Store temperature in Celsius
    }

    // Getter for Fahrenheit
    get fahrenheit() {
        return this.celsius * 1.8 + 32; // Convert Celsius to Fahrenheit
    }

    // Setter for Fahrenheit
    set fahrenheit(value) {
        this.celsius = (value - 32) / 1.8; // Convert Fahrenheit to Celsius
    }

    // Static method to create a Temperature instance from Fahrenheit
    static fromFahrenheit(value) {
        return new Temperature((value - 32) / 1.8); // Create instance with converted Celsius
    }
}

// Test the Temperature class
let temp = new Temperature(22); // Initialize with 22°C
console.log(temp.fahrenheit); // Output: 71.6°F (22°C converted to Fahrenheit)

temp.fahrenheit = 86; // Set temperature to 86°F
console.log(temp.celsius); // Output: 30°C (86°F converted to Celsius)

let tempFromFahrenheit = Temperature.fromFahrenheit(100); // Create from 100°F
console.log(tempFromFahrenheit.celsius); // Output: 37.777...°C (100°F converted to Celsius)