//reduce

const operations = [100, -20, 7, -30, 50];

//Итоговая сумма через for
let balance = 0;
for (const el of operations) {
  balance += el;
}
console.log(balance);

//через reduce
//prev - аккумулятор, то значение куда будет аккумулироваться все операции
//value - текущий элемент
// вконце 0, текущее значение prev
const finalBalance = operations.reduce((prev, value, i) => {
  console.log(`Итерация ${i}, prev: ${prev}, value: ${value}`);
  return prev += value
}, 0)
console.log(finalBalance);

// Итерация 0, prev: 0, value: 100
// Итерация 1, prev: 100, value: -20
// Итерация 2, prev: 80, value: 7
// Итерация 3, prev: 87, value: -30
// Итерация 4, prev: 57, value: 50

//Если мы не укажем в конце текущее значение prev, то он возьмет первый элемент массива

//Реализация минимального элемента
const minEl = operations.reduce((prev, value) => {
  if ( value > prev) {
    return prev
  } else {
    return value
  }
}, 0)
console.log(minEl); // -30
