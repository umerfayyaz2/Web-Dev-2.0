// Base class: Product
class Product {
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    // Method to apply a discount (generic implementation)
    applyDiscount(discount) {
        if (discount < 0 || discount > 100) {
            throw new Error("Discount must be between 0 and 100.");
        }
        const discountAmount = (this.price * discount) / 100;
        this.price -= discountAmount;
        console.log(`Discount applied: ${discount}%`);
        console.log(`New price for ${this.name}: $${this.price.toFixed(2)}`);
    }
}

// Subclass: Electronics
class Electronics extends Product {
    constructor(name, price, quantity) {
        super(name, price, quantity);
    }

    // Override applyDiscount() for Electronics (10% discount)
    applyDiscount() {
        super.applyDiscount(10); // Apply 10% discount
    }
}

// Subclass: Clothing
class Clothing extends Product {
    constructor(name, price, quantity) {
        super(name, price, quantity);
    }

    // Override applyDiscount() for Clothing (20% discount)
    applyDiscount() {
        super.applyDiscount(20); // Apply 20% discount
    }
}

// Subclass: Books
class Books extends Product {
    constructor(name, price, quantity) {
        super(name, price, quantity);
    }

    // Override applyDiscount() for Books (15% discount)
    applyDiscount() {
        super.applyDiscount(15); // Apply 15% discount
    }
}

// Testing the classes
function testProductCatalog() {
    // Create instances of each subclass
    const laptop = new Electronics("Laptop", 1000, 5);
    const tshirt = new Clothing("T-Shirt", 30, 20);
    const novel = new Books("Novel", 20, 10);

    // Test applyDiscount() method for each product
    console.log("Testing Electronics:");
    laptop.applyDiscount();

    console.log("\nTesting Clothing:");
    tshirt.applyDiscount();

    console.log("\nTesting Books:");
    novel.applyDiscount();
}

// Run the test function
testProductCatalog();