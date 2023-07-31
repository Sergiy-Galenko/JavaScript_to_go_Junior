// Example

console.log(isUserValid);

if (!isUserValid) {
  deleteUser();
}

var isUserValid = true;

function deleteUser() {
  console.log('User is deleted!');
}

var a = 1;
let b = 2;
const c = 3;

console.log(a === window.a);
console.log(b === window.b);
console.log(c === window.c);

