var firstName = 'Jack';

const user187 = {
  firstName: 'YouRa',
  birthYear: 1974,
  getAge: function () {
    console.log(this);
    console.log(2021 - this.birthYear);

    // Old approach before ES6
    // const self = this; // self or that
    // const isAdult = function () {
    //   console.log(self);
    //   console.log(2021 - self.birthYear >= 18);
    //   // console.log(2021 - this.birthYear >= 18);
    // };

    // New approach after ES6
    const isAdult = () => {
      console.log(this);
      console.log(2021 - this.birthYear >= 18);
    };

    isAdult();
  },
  sayGreeting: function () {
    // console.log(this);
    console.log(`Hello, I'm ${this.firstName}`);
  },
};

user187.sayGreeting();
user187.getAge();
// console.log(this.firstName);

// arguments keyword
const exprSum = function (a, b) {
  console.log(arguments);
  return a + b;
};

exprSum(1, 2);
exprSum(1, 2, 3, 9, 34);

var arrSum = (a, b) => {
  console.log(arguments);
  return a + b;
};

arrSum(7, 11, 23);

//Primitives VS Reference Types

let a = 1;
let b = a;
a = 2;
console.log(a);
console.log(b);

const x = {
  foo: 'bar',
  a: 1,
};

const y = x;
y.a = 2;

console.log('Object x: ', x);
console.log('Object y: ', y);