// Define a class-like structure for vehicles
function Vehicle(name) {
    this.name = name;
}

// Add a shared method to the prototype
Vehicle.prototype.startEngine = function() {
    console.log(`${this.name} engine started.`);
};

// Create instances
let car = new Vehicle("Car");
let motorcycle = new Vehicle("Motorcycle");

// Call the shared method
car.startEngine(); // Output: Car engine started.
motorcycle.startEngine(); // Output: Motorcycle engine started.

// Override the method for one instance
car.startEngine = function() {
    console.log(`${this.name} engine started with a V8 roar!`);
};

// Call the overridden method
car.startEngine(); // Output: Car engine started with a V8 roar!
motorcycle.startEngine(); // Output: Motorcycle engine started.

// Check the prototype method
console.log(Vehicle.prototype.startEngine === motorcycle.startEngine); // Output: true