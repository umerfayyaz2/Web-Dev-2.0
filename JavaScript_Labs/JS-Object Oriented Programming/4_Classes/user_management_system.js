class User {
    constructor(username, email) {
        this.username = username;
        this.email = email;
    }
    displayInfo() {
        console.log(`Username: ${this.username}, Email: ${this.email}`);
    }
}
class Admin extends User {
    constructor(username, email, role) {
        super(username, email);
        this.role = role;
    }
    displayRole() {
        console.log(`Role: ${this.role}`);
    }
}
// Create instances
let user = new User("alice", "alice@example.com");
let admin = new Admin("admin", "admin@example.com", "superuser");
user.displayInfo();    // Output: Username: alice, Email: alice@example.com
admin.displayInfo();   // Output: Username: admin, Email: admin@example.com
admin.displayRole();   // Output: Role: superuser