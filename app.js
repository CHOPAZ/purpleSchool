//Цикл в цикле

// Сначала выполнится один раз цикл i, затем весь цикл j, затем снова один раз i, и снова весь цикл j и тд

for (let i = 1; i < 5; i++) {
	console.log(`Цикл 1 - ${i}`);
	for(let j = 1; j < 5; j++) {
		console.log(`Цикл 2 - ${j}`);
	}
}

//Пример с массивом
const tasks = [[1, 'Зачада 1'], [2, 'Зачада 2']];

for (let i = 0; i < tasks.length; i++) {

	for(let j = 0; j < tasks[i].length; j++) {
		console.log(tasks[i][j]);
	}
}