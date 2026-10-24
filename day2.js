const monthlyIncome = 25000;

const rent = 7000;
const food = 6000;
const transport = 1500;
const otherExpenses = 2500;

const totalExpenses =
    rent + food + transport + otherExpenses;

const savings = monthlyIncome - totalExpenses;

console.log("MONTHLY BUDGET");
console.log("--------------------");

console.log("Income:", monthlyIncome);
console.log("Total expenses:", totalExpenses);
console.log("Savings:", savings);