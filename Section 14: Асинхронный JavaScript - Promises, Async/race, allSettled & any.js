//race, allSettled & any

Promise.race()

(async function () {
  const response = await Promise.race([
    getDataAndConvertToJSON(`https://restcountries.com/v3.1/name/france`),
    getDataAndConvertToJSON(`https://restcountries.com/v3.1/name/italy`),
    getDataAndConvertToJSON(`https://restcountries.com/v3.1/name/spain`),
  ]);
  console.log(response[0]);
})();

const timeout = function (seconds) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error('Запрос превысил допустимое время'));
    }, seconds * 1000);
  });
};

Promise.race([
  getDataAndConvertToJSON(`https://restcountries.com/v3.1/name/spain`),
  timeout(3),
])
  .then(data => console.log(data[0]))
  .catch(e => console.error(e));

Promise.allSettled()
Promise.allSettled([
  Promise.resolve('Выполнено!'),
  Promise.reject('Отклонено!'),
  Promise.resolve('Выполнено!'),
]).then(data => console.log(data));

Promise.all([
  Promise.resolve('Выполнено!'),
  Promise.reject('Отклонено!'),
  Promise.resolve('Выполнено!'),
])
  .then(data => console.log(data))
  .catch(e => console.error(e));

Promise.any()
Promise.any([
  Promise.reject('Отклонено!'),
  Promise.resolve('1 Выполнено!'),
  Promise.resolve('2 Выполнено!'),
])
  .then(data => console.log(data))
  .catch(e => console.error(e));
