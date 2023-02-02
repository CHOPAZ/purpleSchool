//Цикл в while

for (let i = 1; i < 5; i++) {
	console.log(`Вывод - ${i}`);
}

//Перепишим на while

let i = 1;
while (i < 5) {
	console.log(`Вывод - ${i}`);
	i++;
}

//
const arr = [1, 4, 8, 7];

for (let j = 0; j < arr.length; j++) {
	if (arr[j] > 5) {
		break
	}
	console.log(arr[j]);
}

//Перепишем на while

let j = 0;
while (arr[j] <= 5 && j < arr.length) {
	console.log(arr[j]);
	j++
}

//Цикл do while

let k = 0;
do {
	console.log(arr[k]);
	k++;
} while (arr[k] <= 5 && k < arr.length)