////////////////////////////////////////////////
// Метод reduce()

const transactions = [300, 250, -500, 5000, -750, -180, 50, 1400, -350, -120];

// const balance = transactions.reduce(function (acc, item, index, arr) {
//   console.log(acc);
//   return acc + item;
// }, 0);

const balance = transactions.reduce((acc, item) => acc + item, 0);
console.log('---------------');
console.log(balance);

let sum = 0;
for (const trans of transactions) {
  sum += trans;
}
console.log(sum);

// Get minimum value of transactions

const min = transactions.reduce(
  (acc, trans) => (acc < trans ? acc : trans),
  transactions[0]
);
console.log(min);