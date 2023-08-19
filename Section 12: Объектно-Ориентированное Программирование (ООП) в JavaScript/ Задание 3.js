// Задание 3

// 1. Используйте функцию-конструктор ElectricCar для реализации электрического автомобиля в качестве дочернего «класса» Car. Помимо названия и текущей скорости, у электромобиля также есть текущий заряд аккумулятора в % (свойство battery).
// 2. Реализуйте метод chargeBattery, который принимает аргумент chargeLevel и устанавливает для заряда аккумулятора это значение.
// 3. Реализуйте метод accelerate, который будет увеличивать скорость автомобиля на 10 и снижать заряд аккумулятора на 1% и затем выводит в консоль такое сообщение: «Тесла едет со скоростью 120 км / ч, с зарядом 32%».
// 4. Создайте электромобиль и поэкспериментируйте с методами accelerate() и break(), chargeBattery() (зарядите до 80%). Обратите внимание, что происходит, когда вы «ускоряетесь»! Подсказка: просмотрите определение полиморфизма
// Тестовые данные:
// Тесла едет со скоростью 100 км / ч, с зарядом 33%

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

const ElectricCar = function (name, speed, battery) {
  Car.call(this, name, speed);
  this.battery = battery;
};

ElectricCar.prototype = Object.create(Car.prototype);

ElectricCar.prototype.chargeBattery = function (chargeLevel) {
  this.battery = chargeLevel;
};

ElectricCar.prototype.accelerate = function () {
  this.speed += 10;
  this.battery -= 1;
  console.log(
    `${this.name} едет со скоростью ${this.speed} км / ч, с зарядом ${this.battery}%`
  );
};

const tesla = new ElectricCar('Тесла', 100, 33);
console.log(tesla);
tesla.chargeBattery(80);
console.log(tesla);

tesla.breake();
tesla.breake();
tesla.breake();

tesla.accelerate();

const bmw = new Car('BMW', 150);

bmw.breake();
bmw.breake();

bmw.accelerate();
bmw.accelerate();