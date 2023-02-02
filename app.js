//Callback


// Функции первого класса
function add(a, b) {
	return a + b;
}

function subtrack(a, b) {
	return a - b
}

// Функции высшего порядка - обстрагируется от реализации функции fn
function calculate(a, b, fn) { // fn - функция callback
	console.log(fn.name); //некий объект у которого есть свойство имя
	const res = fn(a,b)
	return res
}

console.log(calculate(2, 3, add));
console.log(calculate(2, 3, subtrack));