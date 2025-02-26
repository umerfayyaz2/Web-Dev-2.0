// Base class: Vehicle
class Vehicle {
    constructor(type, brand) {
        this.type = type;
        this.brand = brand;
    }

    toString() {
        return `${this.brand} ${this.type}`;
    }
}

// Derived class: ElectricVehicle
class ElectricVehicle extends Vehicle {
    constructor(type, brand, batteryCapacity) {
        super(type, brand); // Call parent constructor
        this.batteryCapacity = batteryCapacity; // Additional property
    }

    // Override toString to include battery capacity
    toString() {
        return `${super.toString()} with ${this.batteryCapacity} kWh battery`;
    }
}

// Create instances
const myCar = new Vehicle('Sedan', 'Toyota');
const myElecCar = new ElectricVehicle('SUV', 'Tesla', 75);

// Polymorphic behavior
function printVehicle(vehicle) {
    console.log(vehicle.toString());
}

printVehicle(myCar); // Output: Toyota Sedan
printVehicle(myElecCar); // Output: Tesla SUV with 75 kWh battery