// Define a prototype object
let vehicle = {
    move(speed) {
        console.log(`The ${this.type} is moving at ${speed} km/h.`);
    }
};

// Create objects with the prototype
let car = Object.create(vehicle);
car.type = "car";

let bike = Object.create(vehicle);
bike.type = "bike";

// Call the move method
car.move(100); // Output: The car is moving at 100 km/h.
bike.move(30); // Output: The bike is moving at 30 km/h.

// Add a new method to the prototype
vehicle.stop = function() {
    console.log(`The ${this.type} has stopped.`);
};

// The new method is available to all objects inheriting from vehicle
car.stop(); // Output: The car has stopped.
bike.stop(); // Output: The bike has stopped.