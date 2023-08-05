////////////////////////////////////////////////
// Задание 3

// Перепишите функцию getAverageHumanAge из Задания 2, но на этот раз как стрелочную функцию и с использованием method chaining.
// Тестовые данные:
// 1: [7 , 3, 2, 4, 1, 15, 8, 1, 9, 2]
// 2: [1, 16, 12, 4, 5, 1, 3, 11, 7, 2]

const getAverageHumanAge = catAges =>
  catAges
    .map(catAge => (catAge <= 2 ? catAge * 10 : catAge * 7))
    .filter(humanAge => humanAge >= 18)
    .reduce((acc, catAge, index, arr) => acc + catAge / arr.length, 0);

const averageHumanAge1 = getAverageHumanAge([7, 3, 2, 4, 1, 15, 8, 1, 9, 2]);
const averageHumanAge2 = getAverageHumanAge([1, 16, 12, 4, 5, 1, 3, 11, 7, 2]);
console.log(averageHumanAge1);
console.log(averageHumanAge2);

// // Average value
// // 2, 3, 4 -> (2+3+4)/3 -> 3
// // 2, 3, 4 -> 2/3+3/3+4/3 -> 9/3 -> 3