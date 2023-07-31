// this keyword

console.log(this);

const getAge = function (birthYear) {
  console.log(2021 - birthYear);
  console.log(this);
};

getAge(2001);

const getAgeArr = birthYear => {
  console.log(2021 - birthYear);
  console.log(this);
};

getAgeArr(2001);

const user187 = {
  birthYear: 1974,
  getAge: function () {
    console.log(this);
    console.log(2021 - this.birthYear);
  },
};

user187.getAge();

const user188 = {
  birthYear: 2002,
};

user188.getAge = user187.getAge;
user188.getAge();

const f = user187.getAge;
f();