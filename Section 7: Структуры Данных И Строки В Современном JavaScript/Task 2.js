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

const game = {
  team1: 'REAL MADRID',
  team2: 'BARCELONA',
  players: [
    [
      'Courtois',
      'Vazquez',
      'Militao',
      'Nacho',
      'Mendy',
      'Casemiro',
      'Valverde',
      'Modrich',
      'Kroos',
      'Vinicius',
      'Benzema',
    ],
    [
      'Stegen',
      'Mingueza',
      'Araujo',
      'Lenglet',
      'Dest',
      'Busquets',
      'Jong',
      'Alba',
      'Messi',
      'Pedri',
      'Dembele',
    ],
  ],
  score: '2:1',
  scored: ['Kroos', 'Benzema', 'Mingueza', 'Benzema'],
  date: 'Apr 10th, 2021',
  odds: {
    team1: 1.48,
    draw: 2.53,
    team2: 4.25,
  },
};

// 1
for (const [index, name] of game.scored.entries()) {
  // console.log(entry);
  console.log(`Goal ${index + 1} - ${name}`);
}

// 2
let oddSum = 0;
let odds = Object.values(game.odds);
for (const odd of odds) {
  oddSum += odd;
}
// console.log(oddSum);
// console.log(odds);

const averageOdd = oddSum / odds.length;
console.log(averageOdd);

// 3

// Rate for REAL MADRID victory: 1.48
// Rate for draw: 2.53
// Rate for BARCELONA victory: 4.25

for (const [teamName, odd] of Object.entries(game.odds)) {
  console.log(teamName, odd);
  const mutableText =
    teamName === 'draw' ? 'draw' : `${game[teamName]} victory`;
  console.log(`Rate for ${mutableText}: ${odd}`);
}

// // 4
const goalScorers = {};
for (const player of game.scored) {
  goalScorers[player] ? goalScorers[player]++ : (goalScorers[player] = 1);
}
console.log(goalScorers);

//////////////////////////////////////////////
//for of loop with objects

// Property names
const props = Object.keys(workingHours);
console.log(props);
console.log(`"Banzai" opens ${props.length} days in a week.`);

for (const day of props) {
  console.log(day);
}

// Property values
const values = Object.values(workingHours);
console.log(values);


//Propetry names and values
const entries = Object.entries(workingHours);
console.log(entries);

for (const entry of entries) {
  console.log(entry);
}

for (const [day, { open, close }] of entries) {
  console.log(
    `Restaurant "Banzai" on ${day} opens at ${open} and closes at ${close}`
  );
}

//////////////////////////////////////////////
//Optional chaining (?.)

if (japaneseRestaurant.workingHours && japaneseRestaurant.workingHours.thu) {
  console.log(japaneseRestaurant.workingHours.thu.open);
}

// Using optional chaining

// Properties
console.log(japaneseRestaurant.workingHours.thu?.open);

console.log(japaneseRestaurant.workingHours?.thu?.open);

const daysOfWeek = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of daysOfWeek) {
  // console.log(day);
  const open = japaneseRestaurant.workingHours[day]?.open ?? 'never';
  console.log(`On ${day} restaurant opens at ${open}`);
}

// Methods
console.log(japaneseRestaurant.orderFood?.(1, 2) ?? 'Method does not exist');
console.log(japaneseRestaurant.order?.(1, 2) ?? 'Method does not exist');

// Arrays

const posts = [
  {
    name: 'JS is cool!',
    username: 'Ted',
  },
  {
    name: 'JS is shit!',
    username: 'Dick',
  },
];

const users = [];

console.log(posts[0]?.name ?? 'This post does not exist');
console.log(posts[2]?.name ?? 'This post does not exist');

// Check if the array is empty
console.log(posts[0]?.name ?? 'The array is empty');
console.log(users[0]?.name ?? 'The array is empty');

if (users.length > 0) {
  console.log(users[0].name);
} else {
  console.log('The array is empty');
}

if (japaneseRestaurant.workingHours.fri) {
  console.log(japaneseRestaurant.workingHours.fri.open);
}

//////////////////////////////////////////////
//for of loop

const menu = [...japaneseRestaurant.appetizers, ...japaneseRestaurant.mainMenu];

for (const food of menu) {
  console.log(food);
}

for (const food of menu.entries()) {
  console.log(`${food[0] + 1}. ${food[1]}`);
}

for (const [index, food] of menu.entries()) {
  console.log(`${index + 1}. ${food}`);
}

// console.log([...menu.entries()]);