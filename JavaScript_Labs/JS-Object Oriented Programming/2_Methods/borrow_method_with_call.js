// Define an object with a method to format dates
let dateFormatter = {
    formatDate: function() {
        return `${this.day}/${this.month}/${this.year}`;
    }
};

// Create another object with date properties
let myDate = { day: 15, month: 8, year: 2023 };

// Borrow the formatDate method using call
let formattedDate = dateFormatter.formatDate.call(myDate);
console.log(formattedDate); // Output: 15/8/2023