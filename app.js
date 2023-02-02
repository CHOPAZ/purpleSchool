// function power(pow) {
// 	return function(num) {
// 		return num ** pow
// 	}
// }

//Запишим в виде стрелочной функции
const power = pow => num => num ** pow;

console.log(power(2)(5));