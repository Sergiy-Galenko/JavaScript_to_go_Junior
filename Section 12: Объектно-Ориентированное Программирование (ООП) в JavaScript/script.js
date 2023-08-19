'use strict';


// Задание 4

// 1. Повторно сделайте Задание 3, но на этот раз с использованием классов ES6.
// 2. Сделайте свойство battery приватным.
// 3. Реализуйте возможность цепочки вызова методов accelerate и chargeBattery, тоже сделайте для метода break в классе Car. Затем поэкспериментируйте с цепочкой.
// Тестовые данные:
// Тесла едет со скоростью 100 км / ч, с зарядом 33%

class Car {
  constructor(name, speed) {
    this.name = name;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 5;
    console.log(`${this.name} двигается со скоростью ${this.speed} км/ч.`);
  }

  breake() {
    this.speed -= 5;
    console.log(`${this.name} двигается со скоростью ${this.speed} км/ч.`);
    return this;
  }
}

class ElectricCar extends Car {
  #battery;

  constructor(name, speed, battery) {
    super(name, speed);
    this.#battery = battery;
  }

  chargeBattery(chargeLevel) {
    this.#battery = chargeLevel;
    return this;
  }

  accelerate() {
    this.speed += 10;
    this.#battery -= 1;
    console.log(
      `${this.name} едет со скоростью ${this.speed} км / ч, с зарядом ${
        this.#battery
      }%`
    );
    return this;
  }
}

const tesla = new ElectricCar('Тесла', 100, 33);
console.log(tesla);
tesla.chargeBattery(80);
// console.log(tesla.#battery);

tesla.breake();
tesla.breake();
tesla.breake();

tesla.accelerate();

const bmw = new Car('BMW', 150);

bmw.breake();
bmw.breake();

bmw.accelerate();
bmw.accelerate();

tesla
  .accelerate()
  .accelerate()
  .accelerate()
  .breake()
  .chargeBattery(90)
  .accelerate();
