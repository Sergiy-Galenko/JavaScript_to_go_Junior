////////////////////////////////////////////////////////////////////
//Наследование "Классов". Классы ES6

class Person {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Методы добавляются в свойство .prototype
  printAge() {
    console.log(2021 - this.birthYear);
  }

  greet() {
    console.log(`Hello! My name is ${this.fullName}!`);
  }

  get age() {
    return 2021 - this.birthYear;
  }

  // Установить значение в уже существующее свойство
  set fullName(personName) {
    // console.log(personName);
    if (personName.includes(' ')) {
      this._fullName = personName;
    } else {
      alert(`Полное имя должно состоять из имени и фамилии!`);
    }
  }

  get fullName() {
    return this._fullName;
  }

  static highFive() {
    console.log('High five!');
  }
}

class Student extends Person {
  constructor(fullName, birthYear, dept) {
    // Обязательно записать в самом начале!
    super(fullName, birthYear);
    this.dept = dept;
  }

  introduce() {
    console.log(
      `My name is ${this.fullName} and I study at the "${this.dept}" department.`
    );
  }

  greet() {
    console.log(`Меня зовут ${this.fullName} и я студент!`);
  }
}

const jack = new Student('Jack White', 2001, 'Programming');
console.log(jack);
jack.introduce();
jack.printAge();
jack.greet();