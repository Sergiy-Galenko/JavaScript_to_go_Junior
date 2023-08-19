// Промисификация API Геолокации

const getUserPosition = function () {
  return new Promise(function (resolve, reject) {
    // navigator.geolocation.getCurrentPosition(
    //   position => resolve(position),
    //   e => reject(e)
    // );
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

getUserPosition()
  .then(pos => console.log(pos))
  .catch(e => console.error(e));

const displayUserCountry = function () {
  getUserPosition()
    .then(pos => {
      const { latitude: lat, longitude: lng } = pos.coords;

      return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    })
    .then(response => {
      if (!response.ok)
        throw new Error(
          `Проблема с геокодированием (ошибка ${response.status})`
        );
      return response.json();
    })
    .then(data => {
      console.log(data);
      console.log(`You are in ${data.city}, ${data.country}`);
      return getDataAndConvertToJSON(
        `https://restcountries.com/v3.1/name/${data.country.toLowerCase()}`,
        'Страна не найдена.'
      );
    })
    .then(data => displayCountry(data[0]))
    .catch(e => {
      console.error(`${e} 🧐`);
      displayError(`Что-то пошло не так 🧐: ${e.message} Попробуйте ещё раз!`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    })

    .catch(e => console.error(`${e.message} 🧐`));
};

displayUserCountry();