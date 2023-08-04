////////////////////////////////////////////////
// Простые Методы Массивов

let letters = ['a', 'b', 'c', 'd', 'e', 'f'];

// slice()

console.log(letters.slice(1));
console.log(letters.slice(1, 4));
console.log(letters.slice(-1));
console.log(letters.slice(-3));
console.log(letters.slice(-3, -1));
console.log(letters.slice(2, -1));
console.log(letters.slice());
console.log([...letters]);

//splice()

console.log(letters.splice(1));
letters.splice(-1);
letters.splice(1, 3);

let letters1 = ['a', 'b', 'c', 'd', 'e', 'f'];
let letters2 = ['g', 'h', 'i'];

// reverse()

console.log(letters.reverse());

// concat()

// const letters = letters1.concat(letters2);
// console.log(letters);
// console.log([...letters1, ...letters2]);

// join()

// console.log(letters.join(', '));