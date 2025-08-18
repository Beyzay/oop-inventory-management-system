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

    // Override toString() by adding the expiration date to the string representation
    toString() {
        return `${super.toString()}, Expiration Date: ${this.expirationDate}`;
    }
}

// ------------------------------------------------------------------------------------------------------ //

// Create and log 2 instances (perishable products) of the subclass PerishableProductProperties
let yoghurt = new PerishableProductProperties("Yoghurt", 3.00, 20, "2025-11-11" );
let cream = new PerishableProductProperties("Cream", 3.75, 30, "2025-12-12");

console.log(`Yoghurt: ${yoghurt.toString()}`);
console.log(`Cream: ${cream.toString()}`);

// ------------------------------------------------------------------------------------------------------ //

// Create Store class to store ProductProperties or PerishableProductProperties objects
class Store {
   constructor() {
    this.inventory = [];
   }

   // Define a method to add a product to the inventory
   addProduct(product) {
    this.inventory.push(product);
   }

   // Define a method to calculate and return the total value of all products in the inventory
   getInventoryValue() {
    let totalValue = 0;

    this.inventory.forEach(product => {
        totalValue += product.getTotalValue();
    });

    return totalValue;
   }

   // Define a method to find a product by its name and return it, return null if not found
   findProductByName(name) {
    let foundProductByName = this.inventory.find(product => product.name.toLowerCase() === name.toLowerCase());
    
    return foundProductByName ? foundProductByName : null;
   }
}

// ------------------------------------------------------------------------------------------------------ //

// Test the system

// Create 5 ProductProperties objects that includes 2 PerishableProductProperties objects
let rice = new ProductProperties("Rice", 1.50, 50);
let salt = new ProductProperties("Salt", 1.00, 25);
let cereals = new ProductProperties("Cereals", 2.00, 15);

let egg = new PerishableProductProperties("Egg", 3.50, 8, "2025-09-09");
let milk = new PerishableProductProperties("Milk", 5.00, 10, "2025-10-10");

// Create an object of the Store class
let testStore = new Store();

// Add these 5 products to a Store object
testStore.addProduct(rice);
testStore.addProduct(salt);
testStore.addProduct(cereals);
testStore.addProduct(egg);
testStore.addProduct(milk);

// Print the total inventory value before applying 15% discount
console.log(`Total Inventory Value Before Discount: $${testStore.getInventoryValue()}`);

// Apply 15% discount to the total inventory value
ProductProperties.applyDiscount(testStore.inventory, 0.15);

// Print the total inventory value after applying 15% discount
console.log(`Total Inventory Value After 15% Discount: $${testStore.getInventoryValue()}`);