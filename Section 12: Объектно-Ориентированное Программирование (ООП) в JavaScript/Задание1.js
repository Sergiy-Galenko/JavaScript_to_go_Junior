//////////////////////////////////////////////////////////////////////
// Задание 1

// 1. Используйте функцию-конструктор, чтобы реализовать автомобиль - Car. Автомобиль имеет свойства name и speed. Свойство speed - это текущая скорость автомобиля в км / ч.
// 2. Реализуйте метод accelerate(), который увеличивает скорость автомобиля на 5 и записывает новую скорость в консоль.
// 3. Реализуйте метод break(), который снижает скорость автомобиля на 5 и записывает новую скорость в консоль.
// 4. Создайте 2 объекта Car и поэкспериментируйте с вызовами методов accelerate() и break() несколько раз для каждого из них.

// Тестовые данные:
// Данные для автомобиля 1: Honda едет со скоростью 120 км / ч
// Данные для автомобиля 2: BMW едет со скоростью 150 км / ч.

const Car = function (name, speed) {
  this.name = name;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 5;
  console.log(`${this.name} двигается со скоростью ${this.speed} км/ч.`);
};

Car.prototype.breake = function () {
  this.speed -= 5;
  console.log(`${this.name} двигается со скоростью ${this.speed} км/ч.`);
};

const honda = new Car('Honda', 120);
const bmw = new Car('BMW', 150);

honda.accelerate();
honda.accelerate();
honda.accelerate();
honda.accelerate();
honda.accelerate();
honda.accelerate();

bmw.breake();
bmw.breake();
bmw.breake();
bmw.breake();
