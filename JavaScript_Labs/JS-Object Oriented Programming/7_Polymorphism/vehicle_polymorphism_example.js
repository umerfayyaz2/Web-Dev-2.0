// Define a Vehicle class
class Vehicle {
    constructor(type, brand) {
        this.type = type; // e.g., 'car', 'bike'
        this.brand = brand; // e.g., 'Toyota', 'Honda'
    }

    // Override the toString method
    toString() {
        return `${this.brand} ${this.type}`;
    }
}

// Create an instance of Vehicle
const myCar = new Vehicle('Sedan', 'Toyota');

// Convert the object to a string
console.log(String(myCar)); // Output: Toyota Sedan