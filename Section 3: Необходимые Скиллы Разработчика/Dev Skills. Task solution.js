// Dev Skills Task

// The weather forecast app displays a string with forecasted humidities from a given array.
// Example
// [49, 51, 63] will display " ... 49% humidity in 1 days ... 51% humidity in 2 days ... 63% humidity in 3 days ..."
// Create  a function printHumiditiesForecast(), which takes an array as a parameter and logs a string like the above to the console. Try it with both test datasets.
// Use the problem-solving framework: understand the problem and divide it into sub-problems!
// Data1: [49, 51, 63]
// Data2: [31, 29, 43, 58, 52]

// 1. Understand the problem
// - An array should be converted into a string, in which array values should be separated by ...
// - What are the days numbers? Array item index plus 1

// 2. Divide into sub-problems
// - Convert the array to string
// - Add % character
// - Add days number (item index + 1)
// - Add ... at the beginning and the end of string and also between forecast values

const data1 = [49, 51, 63];
const data2 = [31, 29, 43, 58, 52];

const printHumiditiesForecast = function (arr) {
  // let str = '... ';
  let str = '';

  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]}% in ${i + 1} days ... `;
  }

  console.log('... ' + str);
};

printHumiditiesForecast(data1);
printHumiditiesForecast(data2);