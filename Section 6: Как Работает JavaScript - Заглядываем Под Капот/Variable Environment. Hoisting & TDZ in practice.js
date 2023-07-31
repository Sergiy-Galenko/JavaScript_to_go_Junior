// Hoisting

// Variables
console.log(firstName);
// console.log(job);
// console.log(birthYear);

var firstName = 'YouRa';
let job = 'programmer';
const birthYear = 1974;

// Functions

console.log(declSum(1, 2));
// console.log(exprSum(1, 2));
console.log(arrSum);
// console.log(arrSum(1, 2));

function declSum(a, b) {
  return a + b;
}

const exprSum = function (a, b) {
  return a + b;
};

var arrSum = (a, b) => a + b;
