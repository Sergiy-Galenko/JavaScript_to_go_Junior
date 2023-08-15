/////////////////////////////////////////////
// Задание 2
// В этом задании вам нужно будет создать функциональность загрузки изображений
// 1. Создайте функцию createImageElement(), которая принимает imagePath как входной параметр. Эта функция возвращает promise, которое создает новый HTML элемент img (используйте document.createElement ('img')) и устанавливает атрибут src для предоставленного пути к изображению.
// 2. Когда загрузка изображения будет завершена, добавьте его к элементу DOM с классом images и сделайте promise выполненным. Значение выполненного promise должно быть самим элементом img. В случае, если при загрузке изображения произошла ошибка (прослушайте событие error), отклоните обещание.
// 3. Если эта часть слишком непонятна для вас, просто просмотрите первую часть решения в следующем видео.
// 4. Произведите потребление promise, используя then(), а также добавьте обработчик ошибок.
// 5. После загрузки изображения приостановите выполнение на 2 секунды, используя функцию wait(), которую мы создали ранее.
// 6. По истечении 2 секунд спрячьте текущее изображение (установите для CSS свойства display значение none) и загрузите второе изображение (Подсказка: используйте элемент img из promise, возвращенного из createImageElement(), чтобы скрыть текущее изображение. Для этого вам понадобится глобальная переменная)
// 7. После загрузки второго изображения снова приостановите выполнение на 2 секунды.
// 8. По истечении 2 секунд спрячьте текущее изображение.
// Тестовые данные:
// Изображения в папке img. Протестируйте обработчик ошибок, указав неверный путь к изображению. Установите скорость интернета Fast 3G на вкладке Network в инструментах разработчика, иначе изображения будут загружаться слишком быстро.

const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

const imageContainer = document.querySelector('.images');

let currentImage;

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

createImageElement('img/image1.jpg')
  .then(image => {
    currentImage = image;
    console.log('Первое изображение загружено');
    return wait(2);
  })
  .then(() => {
    currentImage.style.display = 'none';
    return createImageElement('img/image2.jpg');
  })
  .then(image => {
    currentImage = image;
    console.log('Второе изображение загружено');
    return wait(2);
  })
  .then(() => {
    currentImage.style.display = 'none';
  })
  .catch(e => console.error(e));

const getCoutnryData = function (countryName) {
  fetch(`https://restcountries.com/v3.1/name/${countryName}`)
    .then(response => {
      console.log(response);

      if (!response.ok)
        throw new Error(`Страна не найдена. Ошибка ${response.status}`);
      return response.json();
    })
    .then(data => {
      displayCountry(data[0]);
      // const firstNeighbour = data[0].borders[0];
      const firstNeighbour = 'afasga';

      if (!firstNeighbour) return;

      return fetch(`https://restcountries.com/v3.1/alpha/${firstNeighbour}`);
    })
    .then(response => {
      if (!response.ok)
        throw new Error(`Страна не найдена. Ошибка ${response.status}`);
      return response.json();
    })
    .then(data => displayCountry(data[0], 'neighbour'))
    .catch(e => {
      console.error(`${e} 🧐`);
      displayError(`Что-то пошло не так 🧐: ${e.message}. Попробуйте ещё раз!`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};