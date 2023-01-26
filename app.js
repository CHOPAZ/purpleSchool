/*
	Пользователь:
	- Возраст
	- Наличие работы
	- Деньги
	Нужно проверить может ли он купить новый MacBook за 2000$?
	Он может брать не только свои деньги, но и взять кредит.
	Ему дадут 500$, только если ему больше 24-х лет и он
	имеет работу, 100$ если ему просто больше 24-х лет и 0 в
	ином случае.
	Напишите функцию, которая принимает данные пользователя
	и товара и возвращает true или false;
*/

// const ageUser = 24;
// const workUser = true;
// const moneyUser = 1800;
// const coastMacBook = 2000;

// Варианты записи функций дадут ли кредит

// function creditMoney (age, work) {
//   if (age > 24 && work) {
//     return 500;
//   } else if (age >= 24 && !work) {
//     return 100;
//   } return 0;
// }

// function creditMoney (age, work = false) {
//   switch (true) {
//     case age > 24 && work:
//       return 500
//     case age >= 24:
//       return 100
//     default:
//       return 0
//   }
// }

// const creditMoney = (age, work) => (age > 24 && work) 
//   ? 500
//   : (age >= 24 && !work)
//   ?  100 : 0

// Варианты записы функции сможет ли купить

// function canBuy(age, work, money) {
//   const res = money + creditMoney(age,work);
//   return res >= coastMacBook ? true : false
// }

// function canBuy(age, work, money) {
//   const res = money + creditMoney(age,work);
//   if (res >= coastMacBook) {
//     return true;
//   } return false;
// }

// const canBuy = (age, work, money) => {
//   const res = money + creditMoney(age,work);
//   return res >= coastMacBook;
// }
// const canBuy = (age, work, money) => {
//   return coastMacBook <=  money + creditMoney(age,work);
// }

// console.log(canBuy(ageUser, workUser, moneyUser));


// Самая короткая запись

const creditMoney = (ageUser, hasWork = false) => ageUser > 24 && hasWork 
  ? 500
  : ageUser > 24
  ?  100 : 0;

const canBuy = (productPrice, ageUser, money, hasWork = false) => {
  return productPrice <=  money + creditMoney(ageUser, hasWork);
}

console.log(canBuy(2000, 24, 1900));