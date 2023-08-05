////////////////////////////////////////////////
// Другие Способы Создания И Заполнения Массивов

console.log([1, 2, 3]);
console.log(new Array(1, 2, 3));

// empty arrays
const arr = new Array(3);
console.log(arr);
// console.log(arr.map(() => 7));

// Method fill()
// arr.fill(7);
// arr.fill(7, 1);
arr.fill(7, 1, 2);
console.log(arr);

const arr1 = [1, 1, 1, 1, 1];
arr1.fill(3, 2, 4);
console.log(arr1);

//Array.from()
const arr = Array.from({ length: 5 }, () => 1);
console.log(arr);

const arr1 = Array.from({ length: 5 }, (_, index) => index + 1);
console.log(arr1);