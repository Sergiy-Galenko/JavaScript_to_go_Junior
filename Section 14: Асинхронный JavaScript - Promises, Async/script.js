'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const displayCountry = function (data, className = '') {
  const currencies = data.currencies;
  const currensyName = Object.values(currencies)[0].name;
  const currensySymbol = Object.values(currencies)[0].symbol;

  const languages = data.languages;
  const firstLanguage = Object.values(languages)[0];

  const html = `
  <article class="country ${className}">
    <img class="country__img" src="${data.flags.svg}" />
    <div class="country__data">
      <h3 class="country__name">${data.name.common}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👨‍👩‍👧‍👦</span>${(
        +data.population / 1000000
      ).toFixed(1)} миллионов</p>
      <p class="country__row"><span>🗣️</span>${firstLanguage}</p>
      <p class="country__row"><span>💰</span>${currensySymbol} ${currensyName}</p>
    </div>
  </article>
  `;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const displayError = function (message) {
  countriesContainer.insertAdjacentText('beforeend', message);
  countriesContainer.style.opacity = 1;
};

// const getCoutnryAndBorderCountries = function (countryName) {
//   // Вызов AJAX для получения данных о стране
//   const request1 = new XMLHttpRequest();
//   request1.open('GET', `https://restcountries.com/v3.1/name/${countryName}`);
//   request1.send();

//   request1.addEventListener('load', function () {
//     const [data1] = JSON.parse(this.responseText);
//     console.log(data1);

//     // Отображение страны
//     displayCountry(data1);

//     // Получаем первую соседнюю страну
//     const [firstNeighbour] = data1.borders;

//     if (!firstNeighbour) return;

//     // Вызов AJAX для получения данных о первой соседней стране
//     const request2 = new XMLHttpRequest();
//     request2.open(
//       'GET',
//       `https://restcountries.com/v3.1/alpha/${firstNeighbour}`
//     );
//     request2.send();

//     request2.addEventListener('load', function () {
//       const [data2] = JSON.parse(this.responseText);
//       console.log(data2);

//       displayCountry(data2, 'neighbour');
//     });
//   });
// };

const getDataAndConvertToJSON = function (
  url,
  errorMessage = 'Что-то пошло не так 🧐.'
) {
  return fetch(url).then(response => {
    if (!response.ok)
      throw new Error(`${errorMessage} Ошибка ${response.status}`);
    return response.json();
  });
};

// const getCoutnryData = function (countryName) {
//   getDataAndConvertToJSON(
//     `https://restcountries.com/v3.1/name/${countryName}`,
//     'Страна не найдена.'
//   )
//     .then(data => {
//       displayCountry(data[0]);

//       if (!data[0].borders) throw new Error('Соседних стран не найдено!');

//       const firstNeighbour = data[0].borders[0];

//       return getDataAndConvertToJSON(
//         `https://restcountries.com/v3.1/alpha/${firstNeighbour}`,
//         'Страна не найдена.'
//       );
//     })
//     .then(data => displayCountry(data[0], 'neighbour'))
//     .catch(e => {
//       console.error(`${e} 🧐`);
//       displayError(`Что-то пошло не так 🧐: ${e.message} Попробуйте ещё раз!`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

// btn.addEventListener('click', function () {
//   getCoutnryData('ukraine');
// });

////////////////////////////////////////////////////

// const getCoutnryData = function (countryName) {
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v3.1/name/${countryName}`);
//   request.send();
//   // console.log(request.responseText);
//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);

//     const currencies = data.currencies;
//     const currensyName = Object.values(currencies)[0].name;
//     const currensySymbol = Object.values(currencies)[0].symbol;

//     const languages = data.languages;
//     const firstLanguage = Object.values(languages)[0];

//     const html = `
//   <article class="country">
//     <img class="country__img" src="${data.flags.svg}" />
//     <div class="country__data">
//       <h3 class="country__name">${data.name.common}</h3>
//       <h4 class="country__region">${data.region}</h4>
//       <p class="country__row"><span>👨‍👩‍👧‍👦</span>${(
//         +data.population / 1000000
//       ).toFixed(1)} миллионов</p>
//       <p class="country__row"><span>🗣️</span>${firstLanguage}</p>
//       <p class="country__row"><span>💰</span>${currensySymbol} ${currensyName}</p>
//     </div>
//   </article>
//   `;

//     countriesContainer.insertAdjacentHTML('beforeend', html);
//     countriesContainer.style.opacity = 1;
//   });
// };

// getCoutnryAndBorderCountries('usa');

// setTimeout(() => {
//   console.log('Прошла 1 секунда');
//   setTimeout(() => {
//     console.log('Прошло 2 секунды');
//     setTimeout(() => {
//       console.log('Прошло 3 секунды');
//       setTimeout(() => {
//         console.log('Прошло 4 секунды');
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

// const request = new XMLHttpRequest();
// request.open('GET', `https://restcountries.com/v3.1/name/${countryName}`);
// request.send();

// const getCoutnryData = function (countryName) {
//   fetch(`https://restcountries.com/v3.1/name/${countryName}`)
//     .then(function (response) {
//       console.log(response);
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//       displayCountry(data[0]);
//     });
// };

// const getCoutnryData = function (countryName) {
//   fetch(`https://restcountries.com/v3.1/name/${countryName}`)
//     .then(response => {
//       console.log(response);

//       if (!response.ok)
//         throw new Error(`Страна не найдена. Ошибка ${response.status}`);
//       return response.json();
//     })
//     .then(data => {
//       displayCountry(data[0]);
//       // const firstNeighbour = data[0].borders[0];
//       const firstNeighbour = 'afasga';

//       if (!firstNeighbour) return;

//       return fetch(`https://restcountries.com/v3.1/alpha/${firstNeighbour}`);
//     })
//     .then(response => {
//       if (!response.ok)
//         throw new Error(`Страна не найдена. Ошибка ${response.status}`);
//       return response.json();
//     })
//     .then(data => displayCountry(data[0], 'neighbour'))
//     .catch(e => {
//       console.error(`${e} 🧐`);
//       displayError(`Что-то пошло не так 🧐: ${e.message}. Попробуйте ещё раз!`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

// getCoutnryData('japan');

///////////////////////////////////////////////
// Задание 3

// 1. Создайте асинхронную функцию loadAndWait(), которая повторяет функциональность из Задания 2, но на этот раз с использованием async / await (только та часть, где promise потребляется, повторно используйте ранее созданную функцию createImageElement())
// 2. Сравните эти 2 версии, подумайте о различиях и выберите то, что вам больше нравится.
// 3. Не забудьте протестировать обработчик ошибок и установить скорость сети на Fast3G на вкладке Network в инструментах разработчика.
// 4. Создайте асинхронную функцию loadAllImages(), которая принимает массив путей к изображениям imagePathsArray.
// 5. Используйте map() для перебора элементов массива, чтобы загрузить все изображения с помощью функции createImageElement() (получившийся массив назовите images).
// 6. Ознакомьтесь с массивом images в консоли! Это похоже на то, что вы ожидали?
// 7. Используйте функцию комбинирования для фактического получения изображений из массива.
// 8. Добавьте класс parallel для всех изображений (в нём есть некоторые стили CSS).
// Тестовые данные:
// ['img / image1.jpg', 'img / image2.jpg', 'img / image3.jpg']
// Для теста отключите функцию loadAndWait().

const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

const imageContainer = document.querySelector('.images');

// let currentImage;

const createImageElement = function (imagePath) {
  return new Promise(function (resolve, reject) {
    const imgEl = document.createElement('img');
    imgEl.src = imagePath;

    imgEl.addEventListener('load', function () {
      imageContainer.append(imgEl);
      resolve(imgEl);
    });

    imgEl.addEventListener('error', function () {
      reject(new Error('Изображение не найдено'));
    });
  });
};

// createImageElement('img/image1.jpg')
//   .then(image => {
//     currentImage = image;
//     console.log('Первое изображение загружено');
//     return wait(2);
//   })
//   .then(() => {
//     currentImage.style.display = 'none';
//     return createImageElement('img/image2.jpg');
//   })
//   .then(image => {
//     currentImage = image;
//     console.log('Второе изображение загружено');
//     return wait(2);
//   })
//   .then(() => {
//     currentImage.style.display = 'none';
//   })
//   .catch(e => console.error(e));

const loadAndWait = async function () {
  try {
    // Загрузка первого изображения
    let image = await createImageElement('img/image1.jpg');
    console.log('Первое изображение загружено');
    await wait(2);
    image.style.display = 'none';

    // Загрузка второго изображения
    image = await createImageElement('img/image2.jpg');
    console.log('Второе изображение загружено');
    await wait(2);
    image.style.display = 'none';
  } catch (e) {
    console.error(e);
  }
};

// loadAndWait();

const loadAllImages = async function (imagePathsArray) {
  try {
    const images = imagePathsArray.map(
      async imagePath => await createImageElement(imagePath)
    );
    console.log(images);

    const imageElements = await Promise.all(images);
    console.log(imageElements);
    imageElements.forEach(img => img.classList.add('parallel'));
  } catch (e) {
    console.error(e);
  }
};

loadAllImages(['img/image1.jpg', 'img/image2.jpg', 'img/image3.jpg']);
