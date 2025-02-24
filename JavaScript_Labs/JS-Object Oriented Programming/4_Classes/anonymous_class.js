let Greeter = class {
    constructor(greeting) {
        this.greeting = greeting;
    }

    greet() {
        console.log(this.greeting);
    }
};

let helloGreeter = new Greeter("Hello, world!");
helloGreeter.greet(); // Output: Hello, world!