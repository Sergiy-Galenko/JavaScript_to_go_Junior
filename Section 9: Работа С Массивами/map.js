////////////////////////////////////////////////
// Метод map()

const transactions = [300, 250, -500, 5000, -750, -180, 50, 1400, -350, -120];

const usdToEuro = 0.86;

const transactionsEuro2 = transactions.map(function (trans) {
 return trans * usdToEuro;
});

const transactionsEuro = transactions.map(trans => trans * usdToEuro);

console.log(transactions);
console.log(transactionsEuro);

const transactionsEuro1 = [];

for (const trans of transactions) {
  transactionsEuro1.push(trans * usdToEuro);
}

console.log(transactionsEuro1);

// const transactionDescriptions = transactions.map(
//   (transaction, index, array) => {
//     let description = '';

//     if (transaction > 0) {
//       description = `Transaction № ${index + 1}: ${transaction} was deposited`;
//     } else {
//       description = `Transaction № ${index + 1}: ${Math.abs(
//         transaction
//       )} was withdrew`;
//     }

//     return description;
//   }
// );

const transactionDescriptions = transactions.map(
  (transaction, index) =>
    `Transaction № ${index + 1}: ${Math.abs(transaction)} was ${
      transaction > 0 ? 'deposited' : 'withdrew'
    }`
);

console.log(transactionDescriptions);