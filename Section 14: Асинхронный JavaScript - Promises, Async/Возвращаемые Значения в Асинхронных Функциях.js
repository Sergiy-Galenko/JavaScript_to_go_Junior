// Возвращаемые Значения в Асинхронных Функциях

const getUserPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const getCountryData = async function () {
  try {
    const userPosition = await getUserPosition();

    const { latitude: lat, longitude: lng } = userPosition.coords;

    const geocodingResponse = await fetch(
      `https://geocode.xyz/${lat},${lng}?geoit=json`
    );

    if (!geocodingResponse.ok)
      throw new Error('Проблема с извлечением местоположения');

    const geocodingData = await geocodingResponse.json();

    const response = await fetch(
      `https://restcountries.com/v3.1/name/${geocodingData.country.toLowerCase()}`
    );

    if (!response.ok) throw new Error('Проблема с получением страны');

    const data = await response.json();
    displayCountry(data[0]);
    return `You are in ${geocodingData.city}, ${geocodingData.country}`;
  } catch (e) {
    console.error(`${e} 🧐`);
    displayError(`Что-то пошло не так 🧐 ${e.message}`);

    // Отклоняем promise, возвращаемое из асинхронной функции
    throw e;
  }
};

console.log('1 Будем получать местоположение');
// const place = getCountryData();
// console.log(place);
// getCountryData()
//   .then(place => console.log(`2 ${place}`))
//   .catch(e => console.error(`2 ${e.message} 🧐`))
//   .finally(() => console.log('3 Получили местоположение'));

(async function () {
  try {
    const place = await getCountryData();
    console.log(`2 ${place}`);
  } catch (e) {
    console.error(`2 ${e.message} 🧐`);
  }
  console.log('3 Получили местоположение');
})();
