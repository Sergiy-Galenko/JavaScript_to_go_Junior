// Task 3

// Let's get on with our soccer betting app ⚽💰!
// This time we have a map called events (see below) with a log of events that occurred during the game. The values ​​are the events themselves, and the keys are the minutes at which each event happened (the match had 90 minutes plus extra time).
// Your tasks:
// 1. Create an array of gameEvents with different game events that can happen (no duplicates).
// 2. After the end of the game, it turned out that the yellow card from minute 75 was unfair. So remove this event from the game events log.
// 3. Calculate and log the following in the console: “On average, an event happened every 11 minutes” (keep in mind that there are 90 minutes in the game).
// 4. Loop over the events map and log each item to the console, with mark whether it is in the first or second half (after 45 minutes) of the game, for example:
// [FIRST HALF] 19:  Goal

const events = new Map([
  [19, 'Goal'],
  [21, 'Substitution'],
  [43, 'Goal'],
  [56, 'Substitution'],
  [69, 'Yellow card'],
  [73, 'Substitution'],
  [75, 'Yellow card'],
  [79, 'Substitution'],
  [81, 'Red card'],
  [93, 'Goal'],
]);

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
  scored: ['Kroos', 'Benzema', 'Mingueza'],
  date: 'Apr 10th, 2021',
  odds: {
    team1: 1.48,
    draw: 2.53,
    team2: 4.25,
  },
};

// 1
// console.log(events.values());
const gameEvents = [...new Set(events.values())];
console.log(gameEvents);

// 2
events.delete(75);
console.log(events);

// 3
console.log(`On average, an event happened every ${90 / events.size} minutes`);

// 4
for (const [key, value] of events) {
  const half = key <= 45 ? 'FIRST' : 'SECOND';
  console.log(`[${half} HALF] ${key}: ${value}`);
}

//////////////////////////////////////////////
Map. Iteration

const question = new Map([
  ['question', 'What is the most popular programming language for front-end?'],
  [1, 'JavaScript'],
  [2, 'Java'],
  [3, 'Python'],
  ['correctAnswer', 1],
  [true, 'Correct answer :D'],
  [false, 'This is incorrect :( Try again!'],
]);

console.log(question);

// Converting objects to maps
console.log(Object.entries(workingHours));
const workingHoursMap = new Map(Object.entries(workingHours));
console.log(workingHoursMap);

// Quiz app
// console.log(question.get('question'));

// for (const [key, value] of question) {
//   if (typeof key === 'number') {
//     console.log(`${key}: ${value}`);
//   }
// }

// const userAnswer = Number(prompt('Choose the option number'));
// console.log(userAnswer);

// console.log(question.get(question.get('correctAnswer') === userAnswer));

// Converting maps to arrays
console.log([...question]);

// console.log(question.entries());
console.log([...question.keys()]);
console.log([...question.values()]);

//////////////////////////////////////////////
Map. Basics

const restaurant = new Map();
restaurant.set('name', 'Bench');
restaurant.set(1, 'London, England');
restaurant.set(2, 'Paris, France');
console.log(restaurant.set(3, 'Kiev, Ukraine'));

restaurant
  .set('categories', ['Japanese', 'Sushi', 'Vegetarian', 'Organic'])
  .set('open', 10)
  .set('close', 23)
  .set(true, 'Bench is open :)')
  .set(false, 'Bench is closed :(');

console.log(restaurant.get('name'));
console.log(restaurant.get(true));
console.log(restaurant.get(3));

const currentTime = 11;
console.log(
  restaurant.get(
    currentTime > restaurant.get('open') &&
      currentTime < restaurant.get('close')
  )
);

console.log(restaurant.has(false));
console.log(restaurant.delete(1));
// restaurant.clear();
const arr = [1, 2, 3];
restaurant.set(arr, 'Hello!');
restaurant.set(document.querySelector('h2'), 'Heading');
console.log(restaurant);
console.log(restaurant.size);

console.log(restaurant.get(arr));

//////////////////////////////////////////////
Set

const orders = new Set([
  'Sushi',
  'Ramen',
  'Sushi',
  'Tempura',
  'Ramen',
  'Sushi',
]);

console.log(orders);

console.log(new Set('Hello!'));
console.log(new Set());
console.log(orders.size);
console.log(orders.has('Sushi'));
console.log(orders.has('Pizza'));
orders.add('Edamame');
orders.add('Edamame');
orders.delete('Tempura');
// orders.clear();
console.log(orders);

for (const order of orders) {
  console.log(order);
}

// Remove duplicates
const mealIngridients = [
  'Rice',
  'Pepper',
  'Garlic',
  'Pepper',
  'Garlic',
  'Meat',
  'Meat',
  'Garlic',
];
console.log(new Set(mealIngridients).size);

console.log(new Set('allakhverdov yuriy').size);

const mealIngridientsSet = new Set(mealIngridients);
console.log(mealIngridientsSet);
const mealIngridientsUnique = [...mealIngridientsSet];
console.log(mealIngridientsUnique);