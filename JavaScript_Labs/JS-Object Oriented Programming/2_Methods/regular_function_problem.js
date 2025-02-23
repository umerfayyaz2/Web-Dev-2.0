function calculateTotal(items) {
    console.log(items.map(function(item) {
        return item.price * this.taxRate; // `this` is undefined here
    }));
}

let cart = {
    taxRate: 0.1,
    calculateTotal
};

cart.calculateTotal([{ price: 10 }, { price: 20 }]);
// Output: TypeError: Cannot read properties of undefined (reading 'taxRate')