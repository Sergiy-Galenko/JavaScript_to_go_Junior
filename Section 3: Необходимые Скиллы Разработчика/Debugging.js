// Debugging

const calculateHumiditiesAmplitudeWithBug = function (h1, h2) {
  const humidities = h1.concat(h2);
  console.log(humidities);

  let max = 0;
  let min = 0;

  for (let i = 1; i < humidities.length; i++) {
    const currentHumidity = humidities[i];
    if (typeof currentHumidity !== "number") continue;
    // debugger;
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

const amplitude = calculateHumiditiesAmplitudeWithBug(
  [1, 20, 50],
  [23, 48, 78]
);
console.log(amplitude);
