function greetuser(name) {
    console.log("Hello, " + name + "!");
}

greetuser("Akash");

function add(a, b) {
    return a + b;
}

console.log(add(10, 20));
console.log(add(50, 25));
console.log(add(100, 200));

function calculateBill(price, quantity, deliveryFee) {
    const subtotal = price * quantity;
    const total = subtotal + deliveryFee;
    return total;
}

console.log(calculateBill(499, 3, 50));