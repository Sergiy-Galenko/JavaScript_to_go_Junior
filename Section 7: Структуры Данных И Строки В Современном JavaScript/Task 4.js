////////////////////////////////////////////////
// Task 4

/* Write a program that takes a list of variable names written in underscore_case and converts them to camelCase.
Input will come from a textarea html element inserted into the DOM (see code below to insert elements) and the transformation will happen when the button is clicked.

Test data (for inserting into the textarea including spaces):

underscore_case
  first_name
next_Variable
   Calculate_AGE
arrived_flight

This output should appear (5 separate console.log outputs):
underscoreCase 
firstName 
nextVariable 
calculateAge 
arrivedFlight

Hints:
Remember which character defines a newline in a textbox
The solution should only work for a two-word variable like first_second
This is a tricky task, so start watching the solution in case you get stuck. Then pause and continue! */

/* document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const lines = text.split('\n');
  // console.log(lines);
  for (const line of lines) {
    const [firstWord, secondWord] = line.toLowerCase().trim().split('_');
    // console.log(firstWord, secondWord);
    const output = `${firstWord}${secondWord.replace(
      secondWord[0],
      secondWord[0].toUpperCase()
    )}`;
    console.log(output);
  }
}); */

////////////////////////////////////////////////
//Working with strings

const airline = 'SkyUp Airline';
const airplane = 'Boeing 737';

console.log(airplane[0]);
console.log(airplane[1]);
console.log(airplane[2]);
console.log('SkyUp'[0]);

console.log(airline.length);
console.log('Boeing 737'.length);

console.log(airplane.indexOf(' '));
console.log(airplane.indexOf('7'));
console.log(airplane.lastIndexOf('7'));
console.log(airline.indexOf('up'));

// console.log(airplane.slice(7));
console.log(airplane);
console.log(airplane.slice(0, 6));
console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airplane.slice(airplane.lastIndexOf(' ') + 1));

console.log(airline.slice(-2));
console.log(airline.slice(2, -2));

const checkMiddleSeat = function (seat) {
  // B and E are middle seat
  const seatLetter = seat.slice(-1);
  if (seatLetter === 'B' || seatLetter === 'E') {
    console.log('This is a middle seat.');
  } else {
    console.log('This is not a middle seat.');
  }
};

checkMiddleSeat('21A');
checkMiddleSeat('7B');
checkMiddleSeat('14E');

const x = new String('Hello');
console.log(typeof x);
console.log(typeof x.slice(2));

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// Fix the passenger name
const passengerName = 'liNDa'; // Linda
const passengerNameLower = passengerName.toLowerCase();
console.log(passengerNameLower);
const passengerNameFixed =
  passengerNameLower[0].toUpperCase() + passengerNameLower.slice(1);
console.log(passengerNameFixed);

// Email validation
const email = 'someemail@gmail.com';
const loginEmail = '  SomeEmail@Gmail.com \n';

const emailLower = loginEmail.toLowerCase();
const emailTrimmed = emailLower.trim();
console.log(emailTrimmed);

const emailNormalized = loginEmail.toLowerCase().trim();
console.log(emailNormalized);
console.log(email === emailNormalized);

// Replacing
const ticketPriceEU = '197,23€';
const ticketPriceUS = ticketPriceEU.replace(',', '.').replace('€', '$');
console.log(ticketPriceUS);

const announcement =
  'All passengers of flight EG234 come to boarding door 18. Boarding door 18!';
console.log(announcement.replace('door', 'gate'));
console.log(announcement.replaceAll('door', 'gate'));

console.log(announcement.replace(/door/g, 'gate'));

// // Methods return boolean
console.log(airplane);
console.log(airplane.includes('737'));
console.log(airplane.includes('738'));

console.log(airplane.startsWith('Boe'));
console.log(airplane.startsWith('Bt'));
console.log(airplane.startsWith('737'));

console.log(airplane.endsWith('737'));
console.log(airplane.endsWith('Boeing'));

const airplane1 = 'Airbus';

if (airplane.startsWith('Boeing')) {
  console.log('You gonna fly on Boeng!');
}

if (airplane1.startsWith('Boeing')) {
  console.log('You gonna fly on Boeng!');
}

// Example
const checkLuggage = function (luggage) {
  const luggageLower = luggage.toLowerCase();
  if (luggageLower.includes('knife') || luggageLower.includes('gun')) {
    console.log('You are not allowed on board');
  } else {
    console.log('Welcome to the board!');
  }
};

checkLuggage('Food, jeans, socks and Swiss Knife');
checkLuggage('Laptop and food');
checkLuggage('Camera, food, Gun for protection');

// split() and join()
console.log('My+name+is+YouRa.'.split('+'));
console.log('YouRa Allakhverdov'.split(' '));

const [firstName, lastName] = 'YouRa Allakhverdov'.split(' ');
console.log(firstName, lastName);

console.log(['Mr.', firstName, lastName.toUpperCase()].join(' '));

const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesCapitalized = [];
  for (const n of names) {
    // namesCapitalized.push(n[0].toUpperCase() + n.slice(1));
    namesCapitalized.push(n.replace(n[0], n[0].toUpperCase()));
  }
  const capitalizedFullName = namesCapitalized.join(' ');
  return capitalizedFullName;
};

console.log(capitalizeName('youra allakhverdov'));
console.log(capitalizeName('jack white tiger jr.'));

// Padding
const message = 'Hi there!';
console.log(message.padStart(27, '-').padEnd(37, '-'));

const maskCreditCard = function (cardNumber) {
  const strCardNumber = cardNumber + '';
  const last4 = strCardNumber.slice(-4);
  return last4.padStart(strCardNumber.length, '*');
};

console.log(maskCreditCard(1414312413591239515));
console.log(maskCreditCard('1251543661261363616146126'));

// repeat()
const greeting = 'Hi!';
console.log(greeting.repeat(50));

const howMuchYouLoveSomebody = function (loveNumber) {
  console.log(`I love you ${'❤️ '.repeat(loveNumber)}`);
};

howMuchYouLoveSomebody(100);