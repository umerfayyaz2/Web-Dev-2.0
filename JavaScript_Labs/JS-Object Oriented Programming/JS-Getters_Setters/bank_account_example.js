class BankAccount {
    constructor(accountNumber, initialBalance) {
        this._accountNumber = accountNumber; // Private property
        this._balance = initialBalance; // Private property
    }

    // Getter for balance
    get balance() {
        return this._balance;
    }

    // Setter for balance (with validation)
    set balance(value) {
        if (value < 0) {
            throw new Error("Balance cannot be negative");
        }
        this._balance = value;
    }

    // Static method to calculate interest
    static calculateInterest(amount, rate) {
        return amount * (rate / 100);
    }
}

// Test the BankAccount class
let account = new BankAccount("A12345", 1000);

// Access balance using getter
console.log(account.balance); // Output: 1000

// Modify balance using setter
account.balance = 1500;
console.log(account.balance); // Output: 1500

// Attempt to set negative balance (throws error)
try {
    account.balance = -500;
} catch (error) {
    console.error(error.message); // Output: Balance cannot be negative
}

// Calculate interest using static method
let interest = BankAccount.calculateInterest(1000, 5); // 5% interest on $1000
console.log(interest); // Output: 50