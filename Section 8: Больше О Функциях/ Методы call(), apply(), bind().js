
///////////////////////////////////////////////////////////////
// Методы call(), apply(), bind()

const book = function (flightNumber, passengerName) {
  console.log(
    `${passengerName} has booked a ticket on ${this.airlineName} flight ${this.iataCode}${flightNumber}`
  );
  this.bookings.push({
    flight: `${this.iataCode}${flightNumber}`,
    passengerName,
  });
};

const airline1 = {
  airlineName: 'SkyUp',
  iataCode: 'SU',
  bookings: [],
  book(flightNumber, passengerName) {
    console.log(
      `${passengerName} has booked a ticket on ${this.airlineName} flight ${this.iataCode}${flightNumber}`
    );
    this.bookings.push({
      flight: `${this.iataCode}${flightNumber}`,
      passengerName,
    });
  },
};

airline1.book(346, 'Jim Green');
airline1.book(635, 'Michael Jordan');
console.log(airline1);

const airline2 = {
  airlineName: 'EuroFlights',
  iataCode: 'EF',
  bookings: [],
};

const book = airline1.book;

// This doesn't work
book(345, 'Linda Wilams');

// call()
book.call(airline2, 345, 'Linda Wilams');
console.log(airline2);

// book.call(airline1, 111, 'Bob Smith');
// console.log(airline1);

// // apply() - old approach
// const flightData = [111, 'Nick Wong'];
// // book.apply(airline2, flightData);

// book.call(airline2, ...flightData);
// console.log(airline2);

// Метод bind()
const bookAirline2 = book.bind(airline2);
bookAirline2(45, 'John Doe');
console.log(airline2);

const airline3 = {
  airlineName: 'USFlights',
  iataCode: 'USF',
  bookings: [],
};

const bookAirline3 = book.bind(airline3);
bookAirline3(11, 'Marta Jonson');
console.log(airline3);

const bookAirline3Flight21 = book.bind(airline3, 21);
bookAirline3Flight21('Jack Smith');
bookAirline3Flight21('Lana Del Ray');

// bind() with event listeners
airline1.airplanes = 200;
airline1.purchaseAirplane = function () {
  console.log(this);
  this.airplanes++;
  console.log(this.airplanes);
};

// airline1.purchaseAirplane();

document
  .querySelector('#purchase')
  .addEventListener('click', airline1.purchaseAirplane.bind(airline1));

// Partial application
const getPercentage = (totalValue, value) => (value / totalValue) * 100;
console.log(getPercentage(20, 23789));
const getPercentage23789 = getPercentage.bind(null, 23789);
console.log(getPercentage23789(10000));