let protoRabbit = {
    speak(line) {
        console.log(`The ${this.type} rabbit says '${line}'`);
    }
};

let killerRabbit = Object.create(protoRabbit);
killerRabbit.type = "killer";

console.log(killerRabbit.hasOwnProperty("type")); // Output: true
console.log(killerRabbit.hasOwnProperty("speak")); // Output: false

console.log("type" in killerRabbit); // Output: true
console.log("speak" in killerRabbit); // Output: true