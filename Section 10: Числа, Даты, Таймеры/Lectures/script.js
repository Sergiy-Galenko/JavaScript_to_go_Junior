'use strict';

//////////////////////////////////////////////////
// Преобразование И Проверка Чисел

console.log(10 === 10.0);

// 10 - 0-9; 1 / 10 = 0.1; 10 / 3 = 3.33333333
// 2 - 0, 1
console.log(0.1 + 0.2);
console.log(0.1 + 0.2 === 0.3);

// Converting strings to numbers
console.log(Number('11'));
console.log(+'11');
console.log('11');

// Parsing numbers from string
console.log(Number.parseInt('20%', 10));
console.log(Number.parseInt('1011%', 2)); // 1011 -> 1 * 2 ** 0 + 1 * 2 ** 1 + 0 * 2 ** 2 + 1 * 2 ** 3 -> 1 + 2 + 0 + 8 -> 11
console.log(Number.parseInt('s20', 10));
console.log(Number.parseFloat('9.7kg'));
console.log(Number.parseInt('9.7kg'));
console.log(parseInt('9.7kg'));

// Other methods from Number namespace
console.log(Number.isNaN(111));
console.log(Number.isNaN('111'));
console.log(Number.isNaN(Number.parseInt('s20', 10)));
console.log(+'20s');
console.log(Number.isNaN(+'20s'));
console.log(11 / 0);
console.log(Number.isNaN(11 / 0));

console.log('-------------');

// Check if the value is finite number
console.log(Number.isFinite(111));
console.log(Number.isFinite('111'));
console.log(Number.isFinite('111%'));
console.log(Number.isFinite(+'111$'));
console.log(Number.isFinite(11 / 0));

