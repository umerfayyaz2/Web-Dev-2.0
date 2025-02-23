function calculateDiscountedPrices(discounts) {
    console.log(discounts.map(discount => this.price * (1 - discount)));
}

let product = {
    price: 100,
    calculateDiscountedPrices
};

product.calculateDiscountedPrices([0.1, 0.2, 0.3]);
// Output: [90, 80, 70]