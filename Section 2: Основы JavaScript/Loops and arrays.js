const user123 = ['YouRa', 'Allakhverdov', 1974, 'developer', ['Irina', 'Michael'], false];

const types = [];

for(let i = 0; i < user123.length; i++) {
   console.log(user123[i], typeof user123[i]);

   // types[i] = typeof user123[i];
   // types.push(typeof user123[i]);
   types.unshift(typeof user123[i]);
}

console.log(types);

const birthYears = [1974, 1994, 2000, 2003];
const ages = [];

for (let i = 0; i < birthYears.length; i++) {
   ages.push(2021 - birthYears[i]);
}

console.log(ages);
