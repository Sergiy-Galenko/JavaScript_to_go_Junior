/////////////////////////////////////////////
//Создание Простого Promise

const lotteryPromise = new Promise(function (resolve, reject) {
  console.log('Происходит розыгрыш лотереи 🪄');
  setTimeout(function () {
    if (Math.random() >= 0.5) {
      resolve('Вы ВЫИГРАЛИ! 💶');
    } else {
      reject(new Error('Вы ПРОИГРАЛИ! 😿'));
    }
  }, 3000);
});

lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

// Promisifying (промисификация) функции setTimeout()
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

wait(3)
  .then(() => {
    console.log('Длительность ожидания 3 секунды');
    return wait(2);
  })
  .then(() => {
    console.log('Длительность ожидания 2 секунды');
  });

setTimeout(() => {
  console.log('Прошла 1 секунда');
  setTimeout(() => {
    console.log('Прошло 2 секунды');
    setTimeout(() => {
      console.log('Прошло 3 секунды');
      setTimeout(() => {
        console.log('Прошло 4 секунды');
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);

wait(1)
  .then(() => {
    console.log('Прошла 1 секунда');
    return wait(1);
  })
  .then(() => {
    console.log('Прошла 2 секунда');
    return wait(1);
  })
  .then(() => {
    console.log('Прошла 3 секунда');
    return wait(1);
  })
  .then(() => {
    console.log('Прошла 4 секунда');
    return wait(1);
  });

Promise.resolve('Resolved!').then(res => console.log(res));
Promise.reject(new Error('Rejected!')).catch(e => console.error(e));
