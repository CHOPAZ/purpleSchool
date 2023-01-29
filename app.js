function a() {
	return c();
}
function b() {
	return 'Yes';
}
function c() {
	return b;
}
const role1 = 'admin';
const role2 = 'user';
const role3 = 'superuser';

const roles = ['admin', 'user', 'superuser'];
const userIfo = ['Anya', 25];
console.log(roles);
console.log(roles[0]); //admin
console.log(roles[1]); //user
console.log(roles[2]);//superuser
console.log(roles[3]);//undefined
console.log(roles.length); //3
console.log(roles[roles.length - 1]); // superuser

console.log(roles.at(0)); // admin - современный способ получения первого массива, но не все браузеры его поддерживают
console.log(roles.at(-1)); // преимущество получения последнего элемента массива

const userAge = [2040 - 2022, 20 - '6', 10 > 0 ? 5 : 0];
console.log(userAge);

const userNames = new Array('Vasya', 'Petya')
console.log(userNames);

function square(el) {
	return el * el
}
console.log(square(5)); //25
console.log(square([1,2,3])); //NaN
