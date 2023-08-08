
////////////////////////////////////////////////
BigInt
console.log(2 ** 53 - 1);
console.log(Number.MAX_SAFE_INTEGER);

console.log(2 ** 53 + 0);
console.log(2 ** 53 + 1);
console.log(2 ** 53 + 2);

console.log(43223455244520245894325842234543n);
console.log(BigInt('43223455244520245894325842234543'));

console.log(
  43223455244520245894325842234543n + 43223455244520245894325842234543n
);
console.log(
  43223455244520245894325842234543n - 43223455244520245894325842234543n
);
console.log(
  43223455244520245894325842234543n * 43223455244520245894325842234543n
);
console.log(
  43223455244520245894325842234543n / 43223455244520245894325842234543n
);
// console.log(
//   43223455244520245894325842234543n ** 43223455244520245894325842234543n
// );
console.log(43223455244520245894325842234543n ** 10n);

const bigNumber = 43223455244520245894325842234543n;
const regularNumber = 189;

// console.log(Math.pow(bigNumber, 2));

console.log(bigNumber * BigInt(regularNumber));

console.log(43223455244520245894325842234543n > 123);
console.log(123n === 123);
console.log(typeof 123n);
console.log(typeof 123);
console.log(123n == 123);
console.log(123n == '123');

console.log(bigNumber + ' это ОЧЕНЬ большое число!');

console.log(5 / 3);
console.log(5n / 3n);