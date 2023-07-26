let diceNumber = Math.trunc(Math.random() * 6) + 1;
console.log(`Dice number before loop: ${diceNumber}`);

while (diceNumber !== 6) {
   console.log(diceNumber);
   diceNumber = Math.trunc(Math.random() * 6) + 1;
   console.log(`Dice number after random creation inside the loop: ${diceNumber}`);
}