///////////////////////////////////////////////
// Запуск Нескольких Promise Параллельно

const print3CountriesCapitals = async function (counry1, counry2, counry3) {
  try {
    // const [country1Data] = await getDataAndConvertToJSON(
    //   `https://restcountries.com/v3.1/name/${counry1}`
    // );
    // const [country2Data] = await getDataAndConvertToJSON(
    //   `https://restcountries.com/v3.1/name/${counry2}`
    // );
    // const [country3Data] = await getDataAndConvertToJSON(
    //   `https://restcountries.com/v3.1/name/${counry3}`
    // );

    // console.log([
    //   country1Data.capital,
    //   country2Data.capital,
    //   country3Data.capital,
    // ]);

    const countriesData = await Promise.all([
      getDataAndConvertToJSON(`https://restcountries.com/v3.1/name/${counry1}`),
      getDataAndConvertToJSON(`https://restcountries.com/v3.1/name/${counry2}`),
      getDataAndConvertToJSON(`https://restcountries.com/v3.1/name/${counry3}`),
    ]);

    console.log(countriesData.map(countryData => countryData[0].capital));
  } catch (e) {
    console.error(e);
  }
};

print3CountriesCapitals('ukraine', 'russia', 'canada');