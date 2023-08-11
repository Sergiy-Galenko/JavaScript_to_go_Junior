////////////////////////////////////////////////////////////////////
//Статические Методы

const Person = function (firstName, birthYear) {
  // Instance properties - свойства экземпляра
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Никогда не делать этого
  // this.printAge = function() {
  //   console.log(2021 - this.birthYear);
  // };
};

Person.highFive = function () {
  console.log('High five!');
};

Person.prototype.highFive = function () {
  console.log('High five!');
};

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

  // Статический метод
  static highFive() {
    console.log('High five!');
  }
}

Person.highFive();

const jack = new Person('Jack', 1999);
// jack.highFive();