// Классы ES6

// Class expression
const Person = class {

}

//Class declaration
class Person {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  // Методы добавляются в свойство .prototype
  printAge() {
    console.log(2021 - this.birthYear);
  }

  greet() {
    console.log(`Hello! My name is ${this.firstName}!`);
  }
}

const jack = new Person('Jack', 2000);
console.log(jack);
jack.printAge();
console.log(jack.__proto__ === Person.prototype);
console.log(Object.getPrototypeOf(jack) === Person.prototype);

Person.prototype.greet = function () {
  console.log(`Hello! My name is ${this.firstName}!`);
};

jack.greet();

// // 1. Классы не "поднимаются" при помощи hoisting
// // 2. Классы являются "firts class citizens"
// // 3. Тело класса выполняется в strict режиме