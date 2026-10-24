for (let i = 1; i <= 10; i++) {
    console.log("Iteration:", i);
}

let sum = 0;
for (let i = 1; i <= 10; i++) {
    sum += i;
}
console.log("Sum :", sum);

let balance =5000;
const transactions = [500, 1000, 200];

for (const transaction of transactions) {
    balance += transaction;
    console.log("Balance after deposit :", balance);
}
console.log("Final Balance :", balance);