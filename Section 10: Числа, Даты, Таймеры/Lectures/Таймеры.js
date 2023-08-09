////////////////////////////////////////////////
//Таймеры

// setTimeout()
const ingridients = ['Лосось', ''];
const sushiTimer = setTimeout(
  (ingrid1, ingrid2) =>
    console.log(`Ваши суши доставлены! Ингридиенты: ${ingrid1}, ${ingrid2}`),
  3000,
  ...ingridients
);
console.log('Ожидание...');

if (ingridients.includes('Тунец')) clearTimeout(sushiTimer);

// setInterval()
setInterval(function () {
  const now = new Date();
  console.log(now);
}, 3000);
