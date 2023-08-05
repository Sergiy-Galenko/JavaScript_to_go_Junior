
////////////////////////////////////////////////
// Сортировка Массивов

// Strings
const names = ['John', 'Sara', 'Evan', 'Steve', 'Cecil'];
console.log(names.sort());
console.log(names);

// Numbers
const transactions = [300, 250, -500, 5000, -750, -180, 50, 1400, -350, -120];

// return < 0 -> x, y
// return > 0 -> y, x

// Ascending order

transactions.sort((x, y) => {
  if (x > y) {
    return 1;
  }
  if (x < y) {
    return -1;
  }
});

transactions.sort((x, y) => x - y);

console.log(transactions);

// Descending order

transactions.sort((x, y) => {
  if (x > y) {
    return -1;
  }
  if (x < y) {
    return 1;
  }
});

transactions.sort((x, y) => y - x);

console.log(transactions);

