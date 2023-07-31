'use strict';

// function getAge(birthYear) {
//   const age = 2021 - birthYear;

//   function printAge() {
//     let info = `${firstName} is ${age}, born in ${birthYear}`;
//     console.log(info);

//     if (age >= 18) {
//       var isAdult = true;
//       const firstName = 'John';
//       const adult = `${firstName} is adult`;
//       console.log(adult);

//       function sum(a, b) {
//         return a + b;
//       }

//       console.log(sum(1, 2));

//       info = 'New info';
//     }
//     console.log(isAdult);
//     console.log(info);
//     // console.log(adult);
//     // console.log(sum(1, 2));
//   }
//   // console.log(info);
//   printAge();
//   // console.log(isAdult);
//   // console.log(sum(1, 2));

//   return age;
// }

// const firstName = 'YouRa';
// getAge(1974);

// // printAge();

// Regular VS Arrow Functions



// Primitives
let lastName = 'Brown';
let oldLastName = lastName;
lastName = 'White';
console.log(lastName, oldLastName);

// Objects
const jane = {
  firstName: 'Jane',
  lastName: 'Brown',
  age: 21,
};

const marriedJane = jane;
marriedJane.lastName = 'White';
console.log('Jane: ', jane);
console.log('Married Jane: ', marriedJane);
// marriedJane = {};

// Objects copying

const sara = {
  firstName: 'Sara',
  lastName: 'Brown',
  age: 25,
  familyMembers: ['Jack', 'Bob', 'Greta'],
};

const saraCopy = Object.assign({}, sara);
saraCopy.lastName = 'White';
saraCopy.familyMembers.push('Bill', 'Marta');

console.log('Sara: ', sara);
console.log('Married Sara: ', saraCopy);
