//Цикл for of / for in

const arr = [1, 4, 8, 7];

for (let i = 0; i < arr.length; i++) {
	console.log(arr[i]);
}

//for of - итерируется по ЗНАЧЕНИЯМ элементов массива



for (let element of arr) {
	console.log(element);
}

//for in - перебор массива по ИНДЕКСУ

for (let index in arr) {
	console.log(index);
}

