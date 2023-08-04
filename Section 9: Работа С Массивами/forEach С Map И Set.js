////////////////////////////////////////////////
// forEach С Map И Set

// Map

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['CNY', 'Chinese yuan'],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

// Set
const uniqueCurrencies = new Set(['USD', 'EUR', 'USD', 'CNY', 'CNY']);
console.log(uniqueCurrencies);
uniqueCurrencies.forEach(function (value, _, set) {
  console.log(`${value}: ${value}`);
  console.log(set);
});