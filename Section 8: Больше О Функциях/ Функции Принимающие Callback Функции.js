///////////////////////////////////////////////////////////////
// Функции Принимающие Callback Функции

const removeSpaces = function (text) {
  return text.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (text) {
  const [first, ...others] = text.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// Higher-Order Function
const converter = function (str, func) {
  console.log(`The original text: ${str}`);
  console.log(`The converted text: ${func(str)}`);

  console.log(`Converted by: ${func.name}`);
};


converter('Hello to everyone!', upperFirstWord);
converter('Hello to everyone!', removeSpaces);

// Callback functions are very common in JS
const twice = num => console.log(num * 2);
[1, 2, 3].forEach(twice);

///////////////////////////////////////////////////////////////