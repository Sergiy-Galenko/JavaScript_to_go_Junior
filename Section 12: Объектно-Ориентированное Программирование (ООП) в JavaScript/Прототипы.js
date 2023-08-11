////////////////////////////////////////////////////////////////////////
// Прототипы

console.log(Person.prototype);

Person.prototype.printAge = function () {
  console.log(2021 - this.birthYear);
};

youra.printAge();
mary.printAge();
john.printAge();

console.log(youra.__proto__);
console.log(youra.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(mary));
console.log(Person.prototype.isPrototypeOf(john));
console.log(Person.prototype.isPrototypeOf(Person));
// .prototypeOfLinkedObjects

Person.prototype.creatureClass = 'Mammal';
console.log(mary, john);
console.log(mary.hasOwnProperty('birthYear'));
console.log(mary.hasOwnProperty('creatureClass'));
console.log(youra.hasOwnProperty('birthYear'));