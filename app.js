const userName = 'Pasha Chopo';

console.log(userName[0]); // P
console.log(userName[1]); // a
console.log(userName[2]); // s
console.log(userName[3]); // h

//charAt
//Смайлики занимают длину 2


console.log(userName.charAt(2)); // s

//узнать длину 

console.log(userName.length); // 11

//искать по строке - ищет первое 
console.log(userName.indexOf('a')); // 1

//искать по строке - ищет последнее
console.log(userName.lastIndexOf('a'));//4
console.log(userName.lastIndexOf('Ch'));//6
console.log(userName.lastIndexOf('ch'));// -1 - нет такого

//true false
console.log(userName.includes('Ch'));// true
console.log(userName.includes('ch'));// false

//брать части строки
console.log(userName.slice(6));//Chopo
console.log(userName.slice(5));// Chopo
console.log(userName.slice(4));//a Chopo
console.log(userName.slice(6, 8));//Ch


