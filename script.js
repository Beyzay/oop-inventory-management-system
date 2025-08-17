// Set up classes

// Create a base class
class ProductProperties {
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    // Define a method to calculate and return the total value of the product in stock
    getTotalValue() {
        return this.price * this.quantity;
    }
}