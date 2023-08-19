//Пример работы с циклом событий

console.log('Начало теста');
setTimeout(() => console.log('Таймер 0 секунд'), 0);
Promise.resolve('Выполненное promise 1').then(result => console.log(result));
Promise.resolve('Выполненное promise 2').then(result => {
  for (let i = 0; i < 10000000000; i++) {}
  console.log(result);
});
console.log('Конец теста');