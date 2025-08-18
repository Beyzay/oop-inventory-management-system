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

    // Define a method to return a string representation of the product
    toString() {
        return `Product: ${this.name}, Price: ${this.price}, Quantity: ${this.quantity}`;
    }

    // Define a static method to apply discount to an array of ProductProperties or PerishableProductProperties objects
    static applyDiscount(products, discount) {
        products.forEach(product => {
            product.price = product.price * (1 - discount);
        });
    }
}

// ------------------------------------------------------------------------------------------------------ //

// Create a subclass
class PerishableProductProperties extends ProductProperties {
    constructor(name, price, quantity, expirationDate) {
        // Call the parent class constructor
        super(name, price, quantity);

        this.expirationDate = expirationDate;
    }
}