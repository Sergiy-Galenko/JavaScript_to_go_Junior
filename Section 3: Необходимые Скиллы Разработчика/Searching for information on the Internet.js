'use strict';

// Problem 1
// We work on wheather forecast app, specifically on
// humidity feature for now. The most recent task
// is: "Calculate the humidity amplitude for given array
// of humidities for one day. Note, that sometimes
// there can be an error in data, caused by sensor
// error."

const humidities = [32, 45, 29, 19, 'error', 58, 71, 47, 33, 42, 51, 49];

// 1. Understand the problem
// - What is the humidity amplitude? This is the difference between min and max values of humidity.
// - How to calculate min and max values in array?
// - How sensor error looks like in data array? What to do with this error?

// 2. Divide into sub-problems
// - How to ignore data errors?
// - How to calculate min value in array?
// - How to calculate max value in array?
// - Subtract min from max and return the result

const calculateHumiditiesAmplitude = function (humidities) {
  let max = humidities[0];
  let min = humidities[0];

  for (let i = 1; i < humidities.length; i++) {
    const currentHumidity = humidities[i];
    if (typeof currentHumidity !== 'number') continue;

    if (currentHumidity > max) {
      max = currentHumidity;
    }
    if (currentHumidity < min) {
      min = currentHumidity;
    }
  }

  console.log(min, max);
  return max - min;
};

const amplitude = calculateHumiditiesAmplitude(humidities);
console.log(amplitude);