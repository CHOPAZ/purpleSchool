/*
	Задача вывести в консоль строку "Я люблю JS !" из массива,
	проходя циклом в обратном порядке, не используя метод reverse.
	const arr = ['!', 'JS', 'люблю', 'Я'];
*/

const arr = ['!', 'JS', 'люблю', 'Я'];
const arr2 = [];
const arr3 = [];


// Первый способ - учителя
for (let i = arr.length - 1; i >= 0; i--) {
  arr2.push(arr[i])
}
console.log(arr2.join(' ')); 


// Второй способ - мой
for(let i = 1; i <= arr.length; i++) {
  arr3.push(arr[arr.length - i])
}
console.log(arr3.join(' '));

//Третий способ - самый простой  ))
console.log(arr.reverse().join(' '));