////////////////////////////////////////////////////////////////////
// Задание 2

// 1.Решите Задание 1, но теперь с использованием класса ES6
// 2. Добавьте геттер speedMph, который возвращает текущую скорость в милях в час (разделите
// на 1,6)
// 3. Добавьте cеттер speedMph, который устанавливает текущую скорость в милях в час (но
// преобразует его в км / ч перед сохранением значения, умножая ввод на 1,6)
// 4. Создайте новый автомобиль и поэкспериментируйте с методами accelerate() и break(), а также с геттером и сеттером.

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
  }

  get speedMph() {
    return this.speed / 1.6;
  }

  set speedMph(speed) {
    this.speed = speed * 1.6;
  }
}

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

console.log(honda.speedMph);

honda.breake();
honda.speedMph = 20;
console.log(honda.speed);