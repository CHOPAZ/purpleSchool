console.log('Вася' || 'Oleg'); // Вася (всегда первый оперант если он true)
console.log(false || 'Oleg'); // Oleg
console.log('Vasya' || false); // Vasya
console.log(false || false); // false

console.log('Vasya' && 'Oleg'); // Oleg (всегда второй операнд если первый true)
console.log(false && 'Oleg'); // false
console.log('Vasya' && false); // false 
console.log(false && false); //  false

let a;
const userName = a || 'Petay';
console.log(userName); // Petya (т.к а не задано)

let b = 'Marina'
const userName1 = b || 'Petya'
console.log(userName1); // Marina

const isAdmin = true;
const fileName = isAdmin && 'file.mp4';
console.log(fileName);// file.mp4