///////////////////////////////////////////////////////////////
// Task 1

// Let's create a simple survey application!
// A survey has a question, a set of options that users can choose from, and an array with the number of responses for each option. This data is stored in the survey object, which you can see below.

// 1. Create a method called logNewAnswer for the survey object. The method should perform 2 functions:
// a) Display a prompt window so that the user can enter the number of the selected option. The text in the prompt should look like this:
// What programming language would you like to learn?
// 0: JavaScript
// 1: Python
// 2: Ruby
// 3: Java
// 4: C#
// (Enter option number)

// b) Update the answers property based on the number entered. For example, if option 2 is selected, increase the value in the second element of the array answers by 1. Make sure that you entered a number and that it makes sense (for example, the answer 23 does not make sense, right?)
// 2. Call this method when users click the Take Survey button. Create this button in the index.html file as we created the Purchase Airplane button earlier.
// 3. Create a printResults method that prints the survey results to the console. The method takes as input a string (the type parameter), which can be either “string” or “array”. If the type is “array”, just display the answers array as it is using console.log(). This should be the default. If the type is “string”, display a string like this: “Survey results: 7, 5, 3, 2, 6.”
// 4. Метод printResults должен запускаться для каждого вызова метода logNewAnswer
// 5. Use the printResults method to display 2 arrays from test data. Use both "string" and "array" options. Don't put arrays in the survey object! So what should this keyword look like in this situation?

// Test Data:
// [7, 1, 4]
// [3, 6, 9, 2, 5, 4, 4]

// What programming language would you like to learn?
// 0: JavaScript
// 1: Python
// 2: Ruby
// 3: Java
// 4: C#
// (Enter option number)

const survey = {
  question: 'What programming language would you like to learn?',
  options: ['0: JavaScript', '1: Python', '2: Ruby', '3: Java', '4: C#'],
  answers: new Array(5).fill(0),
  logNewAnswer() {
    //Display a prompt
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}\n(Enter option number)`
      )
    );
    // console.log(answer);

    //Update answers
    if (
      typeof answer === 'number' &&
      answer >= 0 &&
      answer < this.answers.length
    ) {
      this.answers[answer]++;
    }
    // console.log(this.answers);
    this.printResults();
    this.printResults('array');
    this.printResults('string');
  },
  printResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      console.log(`Survey results: ${this.answers.join(', ')}.`);
    }
  },
};

// survey.logNewAnswer();
// survey.printResults('string');

document
  .querySelector('#survey')
  .addEventListener('click', survey.logNewAnswer.bind(survey));

survey.printResults.call({ answers: [7, 1, 4] }, 'array');
survey.printResults.call({ answers: [3, 6, 9, 2, 5, 4, 4] }, 'string');

// Test Data:
// [7, 1, 4]
// [3, 6, 9, 2, 5, 4, 4]

/////////////////////////////////////////////////////////////
//Immediately Invoked Function Expression (IIFE)

const runOneTime = function () {
  console.log('You will never see this function call again.');
};
// runOneTime();
// runOneTime();

(function () {
  console.log('You will never see this function call again.');
  const x = 1;
  var z = 3;
})();

// (() => console.log('You will never see this ARROW function call again.'))();

// {
//   // const x = 1;
//   var y = 2;
// }

// console.log(z);

///////////////////////////////////////////////////////////////
// Замыкания (Closures)

const safeBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = safeBooking();

booker();
booker();
booker();

console.dir(booker);

///////////////////////////////////////////////////////////////
// Больше Примеров О Closures

// Example 1

// let f1;

const f2 = function () {
  const x = 11;
  f1 = function () {
    console.log(x ** 2);
  };
};

const f3 = function () {
  const y = 12;
  f1 = function () {
    console.log(y ** 2);
  };
};

f2();
f1();
console.dir(f1);

f3();
f1();
console.dir(f1);

// Example 2

const boardPassengers = function (passengerNumber, secondsBeforeBoarding) {
  const passengersInGroup = passengerNumber / 2;

  setTimeout(function () {
    console.log(`All ${passengerNumber} passengers are now boarding`);
    console.log(`Each group contains ${passengersInGroup} passengers`);
  }, secondsBeforeBoarding * 1000);

  console.log(`The boarding will start in ${secondsBeforeBoarding} seconds`);
};

const passengersInGroup = 1500;
boardPassengers(150, 5);