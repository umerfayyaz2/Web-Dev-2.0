// Base class: Employee
class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }

    work() {
        return `${this.name} is working.`;
    }
}

// Derived class: Manager
class Manager extends Employee {
    constructor(name, salary, department) {
        super(name, salary); // Call the parent constructor
        this.department = department; // Add manager-specific property
    }

    manageTeam() {
        return `${this.name} is managing the ${this.department} department.`;
    }

    work() {
        // Override the work method to include management duties
        return super.work() + ` ${this.name} is also managing the team.`;
    }
}

// Test the classes
const employee = new Employee("Alice", 50000);
console.log(employee.work()); // Output: Alice is working.

const manager = new Manager("Bob", 80000, "Engineering");
console.log(manager.work()); // Output: Bob is working. Bob is also managing the team.
console.log(manager.manageTeam()); // Output: Bob is managing the Engineering department.