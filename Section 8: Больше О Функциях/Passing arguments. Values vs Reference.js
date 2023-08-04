
// Passing arguments. Values vs Reference

const flightNumber = 'BV328';
const passenger1145 = {
  firstName: 'Jack',
  lastName: 'Brown',
  passport: 128490,
};

const checkIn = function (flight, passenger) {
  flight = "bv328";
  passenger.firstName = passenger.firstName.toLowerCase();
  passenger.lastName = passenger.lastName.toLowerCase();

  if (passenger.passport === 128490) {
    alert("Welcome to the board!");
  } else {
    alert("Incorrect passport!");
  }
};

checkIn(flightNumber, passenger1145);
console.log(flightNumber);
console.log(passenger1145);

// This is the same as doing it
const flight = flightNumber;
const passenger = passenger1145;

const changePassportNumber = function (person) {
  person.passport = Math.trunc(Math.random() * 1000000000);
};
changePassportNumber(passenger1145);
checkIn(flightNumber, passenger1145);