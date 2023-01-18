// Тернарные операторы

// Проблемы большая запись
const bmwX3 = 100000;
const fordFocus = 10000;
const budjet = 20000;

let message;
if (budjet > bmwX3) {
  message = 'BMW'
} else if (budjet > fordFocus) {
  message = 'Ford'
} else {
  message = 'Велосипед'
}

if (budjet > bmwX3) 
  message = 'BMW'
else if (budjet > fordFocus) 
  message = 'Ford'
else 
  message = 'Велосипед'


console.log(`Я хочу купить ${message}`);

// Краткая запись if else - Тернарный оператор

const str = 10 > 0 ? '> 0' :' < 0';
console.log(str);

// Перепишем про машины

console.log(`Я хочу купить ${budjet > bmwX3 ? 'BMW' : 'Велосипед'}`);
console.log(`Я хочу купить ${budjet > bmwX3 ? 'BMW' : budjet > fordFocus ? 'Ford' : 'Велосипед'}`);

let message1 = budjet > bmwX3 
  ? 'BMW'
   : budjet > fordFocus ? 'Ford' : 'Велосипед'