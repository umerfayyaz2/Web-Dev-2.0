// Define a Car object with properties and methods
let car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2023,
    startEngine: function() {
        console.log(`The ${this.brand} ${this.model}'s engine has started.`);
    },
    accelerate: function(speed) {
        console.log(`The ${this.brand} ${this.model} is accelerating to ${speed} km/h.`);
    }
};

// Call the methods
car.startEngine(); // Output: The Toyota Corolla's engine has started.
car.accelerate(100); // Output: The Toyota Corolla is accelerating to 100 km/h.