// Анонимные  функции

function powerOfTwo1(num) {
  return num * num
}

console.log(powerOfTwo(5));


// Анонимная функция - у нее нет имени. Взяли фукункцию и положили ее в переменную
const poft1 = function (num) {
  return num * num;
}

console.log(poft1(6)); // вызов этой функции


// Всплытие
console.log(powerOfTwo2(5)); // сработает

function powerOfTwo2(num) {
  return num * num
}

console.log(poft2(6)); // будет ошибка, т.к. переменная poft еще не определена

const poft2 = function (num) {
  return num * num;
}
