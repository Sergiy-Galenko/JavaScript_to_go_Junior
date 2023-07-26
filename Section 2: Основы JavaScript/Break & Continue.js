
// continue & break

const user123 = ['YouRa', 'Allakhverdov', 1974, 'developer', ['Irina', 'Michael'], false];

console.log('CONTINUE EXAMPLE');

for(let i = 0; i < user123.length; i++) {
   if (typeof user123[i] !== 'string') continue;

   console.log(user123[i], typeof user123[i]);
}

console.log('BREAK EXAMPLE');

for(let i = 0; i < user123.length; i++) {
   if (typeof user123[i] === 'number') break;

   console.log(user123[i], typeof user123[i]);
}