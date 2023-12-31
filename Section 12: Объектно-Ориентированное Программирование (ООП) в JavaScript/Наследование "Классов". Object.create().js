// Наследование "Классов". Object.create()

const PersonProto = {
  printAge() {
    console.log(2021 - this.birthYear);
  },

  initPerson(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const StudentProto = Object.create(PersonProto);
StudentProto.initStudent = function (firstName, birthYear, dept) {
  PersonProto.initPerson.call(this, firstName, birthYear);
  this.dept = dept;
};

StudentProto.introduce = function () {
  console.log(
    `My name is ${this.firstName} and I study at the "${this.dept}" department.`
  );
};

const jack = Object.create(StudentProto);
jack.initStudent('Jack', 2003, 'Programming');
jack.introduce();
jack.printAge();