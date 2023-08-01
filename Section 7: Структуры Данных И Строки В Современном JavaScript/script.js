'use strict';

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const workingHours = {
  [weekdays[2]]: {
    open: 10,
    close: 23,
  },
  [weekdays[4]]: {
    open: 10,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0,
    close: 24,
  },
  [weekdays[6]]: {
    open: 12,
    close: 23,
  },
};

const japaneseRestaurant = {
  name: 'Banzai',
  location: '108 Markham Woods Rd, Longwood, USA',
  categories: ['Japanese', 'Sushi', 'Vegetarian', 'Organic'],
  appetizers: ['Seaweed salad', 'Tempura shrimp', 'Edamame', 'Sushi rice'],
  mainMenu: ['Sushi', 'Ramen', 'Tempura'],

  // Enhanced syntax of ES6 object literals
  workingHours,

  orderFood(appetizersIndex, mainMenuIndex) {
    return [this.appetizers[appetizersIndex], this.mainMenu[mainMenuIndex]];
  },
  foodDelivery({
    mainMenuIndex = 0,
    appetizersIndex = 0,
    address,
    deliveryTime = '18:00',
  }) {
    console.log(
      `Your order on the way to you! ${this.appetizers[appetizersIndex]} and ${this.mainMenu[mainMenuIndex]} will be arrived to ${address} at ${deliveryTime}.`
    );
  },

  orderSushi(ing1, ing2, ing3) {
    console.log(`You have ordered sushi with ${ing1}, ${ing2}, ${ing3}`);
  },

  orderRamen(noodle, ...otherIngs) {
    console.log(noodle);
    console.log(otherIngs);
  },
};



////////////////////////////////////////////////


////////////////////////////////////////////////
// Task 2

// Let's get on with our soccer betting app ⚽💰! Continue using the previously used game variable.
// 1. Loop through the game.scored array and print the name of each player to the console along with the goal number (example: “Goal 1 - Kroos”)
// 2. Use a loop to calculate the average odd and print it to the console
// 3. Print 3 odds to the console, but formatted, exactly like this:
// Rate for REAL MADRID victory: 1.48
// Rate for draw: 2.53
// Rate for BARCELONA victory: 4.25
// Get team names directly from the game object, don't hardcode them
// 4. Bonus: create an object called goalScorers that contains the names of the players who scored as properties and the number of goals as a value. In this game it will look like this:
//       {
//         Kroos: 1,
//         Benzema: 1,
//         Mingueza: 1
//       }

// const game = {
//   team1: 'REAL MADRID',
//   team2: 'BARCELONA',
//   players: [
//     [
//       'Courtois',
//       'Vazquez',
//       'Militao',
//       'Nacho',
//       'Mendy',
//       'Casemiro',
//       'Valverde',
//       'Modrich',
//       'Kroos',
//       'Vinicius',
//       'Benzema',
//     ],
//     [
//       'Stegen',
//       'Mingueza',
//       'Araujo',
//       'Lenglet',
//       'Dest',
//       'Busquets',
//       'Jong',
//       'Alba',
//       'Messi',
//       'Pedri',
//       'Dembele',
//     ],
//   ],
//   score: '2:1',
//   scored: ['Kroos', 'Benzema', 'Mingueza', 'Benzema'],
//   date: 'Apr 10th, 2021',
//   odds: {
//     team1: 1.48,
//     draw: 2.53,
//     team2: 4.25,
//   },
// };

// // 1
// for (const [index, name] of game.scored.entries()) {
//   // console.log(entry);
//   console.log(`Goal ${index + 1} - ${name}`);
// }

// // 2
// let oddSum = 0;
// let odds = Object.values(game.odds);
// for (const odd of odds) {
//   oddSum += odd;
// }
// // console.log(oddSum);
// // console.log(odds);

// const averageOdd = oddSum / odds.length;
// console.log(averageOdd);

// // 3

// // Rate for REAL MADRID victory: 1.48
// // Rate for draw: 2.53
// // Rate for BARCELONA victory: 4.25

// for (const [teamName, odd] of Object.entries(game.odds)) {
//   console.log(teamName, odd);
//   const mutableText =
//     teamName === 'draw' ? 'draw' : `${game[teamName]} victory`;
//   console.log(`Rate for ${mutableText}: ${odd}`);
// }

// // 4
// const goalScorers = {};
// for (const player of game.scored) {
//   goalScorers[player] ? goalScorers[player]++ : (goalScorers[player] = 1);
// }
// console.log(goalScorers);

////////////////////////////////////////////////
// for of loop with objects

// // Property names
// const props = Object.keys(workingHours);
// console.log(props);
// console.log(`"Banzai" opens ${props.length} days in a week.`);

// for (const day of props) {
//   console.log(day);
// }

// // Property values
// const values = Object.values(workingHours);
// console.log(values);

// // Propetry names and values
// const entries = Object.entries(workingHours);
// console.log(entries);

// for (const entry of entries) {
//   console.log(entry);
// }

// for (const [day, { open, close }] of entries) {
//   console.log(
//     `Restaurant "Banzai" on ${day} opens at ${open} and closes at ${close}`
//   );
// }

////////////////////////////////////////////////
// Optional chaining (?.)

// if (japaneseRestaurant.workingHours && japaneseRestaurant.workingHours.thu) {
//   console.log(japaneseRestaurant.workingHours.thu.open);
// }

// // Using optional chaining

// // Properties
// console.log(japaneseRestaurant.workingHours.thu?.open);

// console.log(japaneseRestaurant.workingHours?.thu?.open);

// const daysOfWeek = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
// for (const day of daysOfWeek) {
//   // console.log(day);
//   const open = japaneseRestaurant.workingHours[day]?.open ?? 'never';
//   console.log(`On ${day} restaurant opens at ${open}`);
// }

// // Methods
// console.log(japaneseRestaurant.orderFood?.(1, 2) ?? 'Method does not exist');
// console.log(japaneseRestaurant.order?.(1, 2) ?? 'Method does not exist');

// // Arrays

// const posts = [
//   {
//     name: 'JS is cool!',
//     username: 'Ted',
//   },
//   {
//     name: 'JS is shit!',
//     username: 'Dick',
//   },
// ];

// const users = [];

// console.log(posts[0]?.name ?? 'This post does not exist');
// console.log(posts[2]?.name ?? 'This post does not exist');

// // Check if the array is empty
// console.log(posts[0]?.name ?? 'The array is empty');
// console.log(users[0]?.name ?? 'The array is empty');

// if (users.length > 0) {
//   console.log(users[0].name);
// } else {
//   console.log('The array is empty');
// }

// if (japaneseRestaurant.workingHours.fri) {
//   console.log(japaneseRestaurant.workingHours.fri.open);
// }

////////////////////////////////////////////////
// for of loop

// const menu = [...japaneseRestaurant.appetizers, ...japaneseRestaurant.mainMenu];

// for (const food of menu) {
//   console.log(food);
// }

// for (const food of menu.entries()) {
//   console.log(`${food[0] + 1}. ${food[1]}`);
// }

// for (const [index, food] of menu.entries()) {
//   console.log(`${index + 1}. ${food}`);
// }

// // console.log([...menu.entries()]);

////////////////////////////////////////////////
// Task 1
// We are creating a soccer betting app ⚽💰!
// Let's say we are getting data about a specific game from a web service (the game variable below). Your tasks:

// 1. Create separate arrays with players for each team (variables players1 and players2).
// 2. The first player in each of these arrays is the goalkeeper and the rest are the field players. For REAL MADRID (team1) create one variable (goalkeeper) with the name of the goalkeeper and one array (fieldPlayers) with all the remaining 10 field players.
// 3. Create an array allPlayers containing all players from both teams (22 players).
// 4. REAL MADRID (team1) used 5 substitute players during the game. Create a new array (players1Total) containing all original players of team1 as well as ‘Marcelo’, 'Isco', 'Asensio', ‘Diaz' and 'Odriozola'.
// 5. Based on the game.odds object, create one variable for each odd (called team1, draw and team2).
// 6. A write function printGoals that takes an arbitrary number of player names (NOT an array) and prints each one to the console along with the total number of goals scored (the number of player names passed to the function).
// 7. The team with the lower odds will win more likely. Print to the console which team is more likely to win, WITHOUT using an if / else or ternary operator.
// Test data for 6.: First use 'Mingueza', 'Messi', 'Modrich' and 'Nacho' players. Then call the function again with the players from game.scored.

// const game = {
//   team1: 'REAL MADRID',
//   team2: 'BARCELONA',
//   players: [
//     [
//       'Courtois',
//       'Vazquez',
//       'Militao',
//       'Nacho',
//       'Mendy',
//       'Casemiro',
//       'Valverde',
//       'Modrich',
//       'Kroos',
//       'Vinicius',
//       'Benzema',
//     ],
//     [
//       'Stegen',
//       'Mingueza',
//       'Araujo',
//       'Lenglet',
//       'Dest',
//       'Busquets',
//       'Jong',
//       'Alba',
//       'Messi',
//       'Pedri',
//       'Dembele',
//     ],
//   ],
//   score: '2:1',
//   scored: ['Kroos', 'Benzema', 'Mingueza'],
//   date: 'Apr 10th, 2021',
//   odds: {
//     team1: 1.48,
//     draw: 2.53,
//     team2: 4.25,
//   },
// };

// // 1
// const [players1, players2] = game.players;
// console.log(players1, players2);

// // 2
// const [goalkeeper, ...fieldPlayers] = players1;
// console.log(goalkeeper, fieldPlayers);

// // 3
// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

// // 4
// const players1Total = [
//   ...players1,
//   'Marcelo',
//   'Isco',
//   'Asensio',
//   'Diaz',
//   'Odriozola',
// ];
// console.log(players1Total);

// // 5
// const {
//   odds: { team1, draw, team2 },
// } = game;
// console.log(team1, team2, draw);

// // 6
// const printGoals = function (...gamePlayers) {
//   console.log(gamePlayers);
//   console.log(`${gamePlayers.length} goals scored`);
// };

// printGoals('Mingueza', 'Messi', 'Modrich', 'Nacho');
// printGoals(...game.scored);

// // 7
// team1 < team2 && console.log(`${game.team1} is more likely to win.`);
// team1 > team2 && console.log(`${game.team2} is more likely to win.`);

/////////////////////////////////////////////////
// Nullish Coalescing

// japaneseRestaurant.guestsNumber = 0;
// const guests = japaneseRestaurant.guestsNumber || 5;
// console.log(guests);

// // Nullish values: null and undefined (NOT 0 or '')
// const guests1 = japaneseRestaurant.guestsNumber ?? 5;
// console.log(guests1);

/////////////////////////////////////////////////
// Short-circuit evaluation (||) (&&)

// // AND (&&) operator. Use any data types, return any data types, short-circuit evaluation
// console.log(0 && 'Hello!');
// console.log(1 && 'Hello!');
// console.log('hey' && 34 && 0 && 44 && null);

// if (japaneseRestaurant.orderRamen) {
//   japaneseRestaurant.orderRamen('Something');
// }

// japaneseRestaurant.orderRamen && japaneseRestaurant.orderRamen('Something');

// // OR (||) operator. Use any data types, return any data types, short-circuit evaluation
// console.log(5 || 'Hello!');
// console.log('' || 'Hello!');
// console.log(true || 0);
// console.log(undefined || null);

// console.log(undefined || '' || 0 || 'Hey!' || 23 || null);

// japaneseRestaurant.guestsNumber = 0;

// const guests = japaneseRestaurant.guestsNumber
//   ? japaneseRestaurant.guestsNumber
//   : 5;
// console.log(guests);

// const guests1 = japaneseRestaurant.guestsNumber || 5;
// console.log(guests1);

/////////////////////////////////////////////////
// Rest (...) pattern

// // 1. Rest pattern with destructuring

// // Rest pattern with arrays

// // This is spread operator, because ... are on the right side of =
// const arr = [1, 2, ...[3, 4]];

// // This is rest pattern, because ... are on the left side of =
// const [a1, a2, ...items] = [1, 2, 3, 4];
// console.log(a1, a2, items);

// const [seaweed, , edamame, ...otherFood] = [
//   ...japaneseRestaurant.appetizers,
//   ...japaneseRestaurant.mainMenu,
// ];
// console.log(seaweed, edamame, otherFood);

// // Rest pattern with objects
// const { sun, sat, ...weekdays } = japaneseRestaurant.workingHours;
// console.log(sun, sat, weekdays);

// // 2. Rest pattern with functions
// const sum = function (...nums) {
//   let sum = 0;
//   for (let i = 0; i < nums.length; i++) {
//     sum += nums[i];
//   }
//   console.log(sum);
// };

// sum(2, 5);
// sum(1, 4, 7, 3);

// const numbers = [3, 44, 2];

// sum(...numbers);

// japaneseRestaurant.orderRamen('Colored Noodle', 'Meat', 'Chicken', 'Onion');

// japaneseRestaurant.orderRamen('Ordinary Noodle');

/////////////////////////////////////////////////
// Spread (...) operator

// const arr = [1, 3, 5];

// // Old bad approach
// const newArr = [7, 9, arr[0], arr[1], arr[2]];
// console.log(newArr);

// // New approach with spread operator
// const newArrSpread = [7, 9, ...arr];
// console.log(newArrSpread);
// console.log(...newArrSpread);
// console.log(7, 9, 1, 3, 5);

// const newMenu = [...japaneseRestaurant.mainMenu, 'Miso Salmon'];
// console.log(newMenu);

// // Array copying
// const categoriesCopy = [...japaneseRestaurant.categories];

// // Merge arrays
// const menu = [...japaneseRestaurant.appetizers, ...japaneseRestaurant.mainMenu];
// console.log(menu);

// // Iterable - arrays, strings, maps, sets. OBJECTS AREN'T ITERABLE.

// // Spread operator with strings
// const greeting = 'Hey';
// const greetingLetters = [...greeting, '!'];
// console.log(greetingLetters);
// console.log(...greeting);
// // console.log(`${...greeting}`); // Can't do this!!!

// const ingridients = [
//   prompt(`Ingridient 1 for your sushi?`),
//   prompt(`Ingridient 2 for your sushi?`),
//   prompt(`Ingridient 3 for your sushi?`),
// ];
// console.log(ingridients);

// japaneseRestaurant.orderSushi(ingridients[0], ingridients[1], ingridients[2]);

// japaneseRestaurant.orderSushi(...ingridients);

// Objects

// const newJapaneseRestaurant = {
//   foundationDate: 2011,
//   ...japaneseRestaurant,
//   owner: 'Suzuki',
// };
// console.log(newJapaneseRestaurant);

// const japaneseRestaurantCopy = { ...japaneseRestaurant };
// japaneseRestaurantCopy.name = 'Suzuki Sushi';
// console.log(japaneseRestaurantCopy.name);
// console.log(japaneseRestaurant.name);

/////////////////////////////////////////////////
// Destructuring Objects

// japaneseRestaurant.foodDelivery({
//   deliveryTime: '12:30',
//   address: '18 Markham Woods Rd',
//   mainMenuIndex: 1,
//   appetizersIndex: 0,
// });

// japaneseRestaurant.foodDelivery({
//   address: '18 Markham Woods Rd',
// });

// const { workingHours: hours, name: restName, categories } = japaneseRestaurant;
// console.log(hours, restName, categories);

// // Default values
// const { menu = [], appetizers: starterMenu = [] } = japaneseRestaurant;
// console.log(menu, starterMenu);

// // Mutating variables
// let x = 3;
// let y = 5;
// const obj = { x: 11, y: 22, z: 33 };

// ({ x, y } = obj);
// console.log(x, y);

// // Nested objects
// const {
//   sun: { open: openHours, close: closeHours },
// } = hours;
// console.log(openHours, closeHours);

////////////////////////////////////////////////
// Destructuring Arrays

// const arr = [3, 5, 7];
// const x1 = arr[0];
// const x2 = arr[1];
// const x3 = arr[2];

// const [y1, y2, y3] = arr;
// console.log(y1, y2, y3);

// const [a, b, c] = arr;
// console.log(a, b, c);

// console.log(arr);

// let [main, , secondary] = japaneseRestaurant.categories;
// console.log(main, secondary);

// // Swaping variables

// // const temp = main;
// // main = secondary;
// // secondary = temp;
// // console.log(main, secondary);

// [secondary, main] = [main, secondary];
// console.log(main, secondary);

// // Returning 2 values from function
// const [appetizer, mainFood] = japaneseRestaurant.orderFood(2, 1);
// console.log(appetizer, mainFood);

// // Nested destructuring
// const nestedArr = [1, 2, [7, 9]];
// // const [f, , d] = nestedArr;
// // console.log(f, d);

// const [f, , [d, e]] = nestedArr;
// console.log(f, d, e);

// // Default values
// const unknownArr = [3, 5];
// const [g = 0, i = 0, j = 0] = unknownArr;
// console.log(g, i, j);
