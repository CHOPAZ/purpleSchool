/*
вытащить имя и фамилию в отдельные переменные
*/

const userName = 'Вася aka Terminator Perdinator Пупкин';

console.log(userName.length);

const name = userName.slice(0, userName.indexOf(' '));
console.log(name);
const serName = userName.slice(userName.lastIndexOf(' ') + 1,userName.length );
console.log(serName);


