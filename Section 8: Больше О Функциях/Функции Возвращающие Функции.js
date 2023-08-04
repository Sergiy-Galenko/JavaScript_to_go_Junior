// Функции Возвращающие Функции

const greet = function (greetingText) {
  return function (name) {
    console.log(`${greetingText} ${name}!`);
  };
};

const hi = greet('Hi');
hi('Jack');
hi('Diana');
hi('Mick');

greet('Hey')('Lilu');

// greet() =>
const arrGreet = greetingText => name =>
  console.log(`${greetingText} ${name}!`);

arrGreet('Hello')('Lilu');
