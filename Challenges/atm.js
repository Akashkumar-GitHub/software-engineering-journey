const balance = 5000;
const withdrawal = 5000;

if (withdrawal <= 0) {
  console.log("Invalid withdrawal amount.");
} else if (withdrawal > balance) {
  console.log("Insufficient funds");
}else {
  const newBalance = balance - withdrawal;
  console.log("Withdrawal successful. remaining balance:", newBalance);
}