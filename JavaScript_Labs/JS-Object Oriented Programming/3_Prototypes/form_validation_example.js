// Defining a prototype for validation rules
let validator = {
    validateEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    },
    validatePassword(password) {
        return password.length >= 8;
    }
};
// Create a form validator object
let userValidator = Object.create(validator);
userValidator.validateForm = function(form) {
    if (!this.validateEmail(form.email)) {
        console.log("Invalid email.");
        return false;
    }
    if (!this.validatePassword(form.password)) {
        console.log("Password must be at least 8 characters.");
        return false;
    }
    console.log("Form is valid.");
    return true;
};
// Test the form validator
let form = { email: "test@example.com", password: "password123" };
userValidator.validateForm(form); // Output: Form is valid.