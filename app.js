/* Свойства аргументов*/

function toPower(num, power) {
  console.log(typeof power);
  const res = num ** power;
  return res;
}

console.log(toPower(2, 3)); // 3 - number

// если мы не зададим каой нибудь параметр, то будет NaN
console.log(toPower(2)); // 3 - undefined ( 2 * undefined = NaN)

// Проверка на нулевое значение || или через ??
function toPower2(num, power) {
  const power2 = power ?? 2
  const res = num ** power2;
  return res;
}

console.log(toPower2(2,3)); // 8
console.log(toPower2(2)); // 4

//Задание  значений по умолчанию

function toPower3(num, power = 2) {
  const res = num ** power;
  return res;
}

console.log(toPower3(2));