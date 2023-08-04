////////////////////////////////////////////////
// Итерация Массивов С Помощью Цикла forEach

const transactions = [300, 250, -500, 5000, -750, -180, 50, 1400, -350, -120];

for (const transaction of transactions) {
  if (transaction > 0) {
    console.log(`${transaction} was deposited`);
  } else {
    console.log(`${Math.abs(transaction)} was withdrew`);
  }
}

for (const [i, transaction] of transactions.entries()) {
  if (transaction > 0) {
    console.log(`${transaction} was deposited`);
    console.log(i);
  } else {
    console.log(`${Math.abs(transaction)} was withdrew`);
    console.log(i);
  }
}

console.log('------------------------');

transactions.forEach(function (transaction, index /*, array*/) {
  if (transaction > 0) {
    console.log(`Transaction № ${index + 1}: ${transaction} was deposited`);
  } else {
    console.log(
      `Transaction № ${index + 1}: ${Math.abs(transaction)} was withdrew`
    );
  }
});