/*
	Васи положил 12 000$ на вклад 7% годовых с
	капитализацией 1 раз в месяц.
	Вывести в консоль, сможет ли он купить дом за 13 500$
	через 2 года после снятия вклада. И остаток после покупки.

	Итог = Сумма * (1 + Ставка в месяц не в %) ^ срок в месяцах
*/

const money = 12000;
const depositProcentMonth = 0.0058;
const depositLength = 24
const houseCost = 13500;

const result = money * (1 + depositProcentMonth) ** depositLength


if (result >= houseCost) {
  console.log(`You can buy a house, and you will have ${Math.round(result - houseCost)}$`);
} else {
  console.log(`You won't be able to buy a house you will have ${Math.round(result)} $`);
}