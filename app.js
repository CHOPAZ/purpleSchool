/*
	Есть выгрузка операций пользователя
	const operations = [1000, -700, 300, -500, 10000];
	а так же начальный баланс в 100$
	Необходимо сделать функции расчёта:
	- Итогового баланса
	- Наличия отрицательного баланса (если после очередной операции
		баланс < 0, то выдавать false)
	- Расчёта среднего расхода и среднего дохода
*/

let startingBalance = 100;
const operations = [1000, -700, 300, -500, 10000];

//Итоговый баланс

const finalBalance = (arrayOfOperations, initailBalance) => {
	let balance = initailBalance;
	for (const el of arrayOfOperations) {
		balance += el;
	}
	return balance
}

console.log(finalBalance(operations, startingBalance));

//Наличия отрицательного баланса

const negativeBalance = (arrayOfOperations, initailBalance) => {
	let balance = initailBalance;
	let isOk = true;
	for (const el of arrayOfOperations) {
		balance += el;
		if (balance < 0) {
			isOk = false;
			break;
		}
	}
	console.log(balance);
	return isOk;
}

console.log(negativeBalance(operations, startingBalance));

// Расчёта среднего расхода и среднего дохода

const avarageOperations = (arrayOfOperations) => {
	let positiveSum = 0;
	let negativeSum = 0;
	let positiveCount = 0;
	let negativeCount = 0;
	for (const el of arrayOfOperations){
		if (el > 0) {
			positiveCount++;
			positiveSum += el
		}
		if (el < 0) {
			negativeCount++;
			negativeSum += el;
		}
	}
	return [positiveSum / positiveCount, negativeSum / negativeCount]	
}

console.log(avarageOperations(operations));