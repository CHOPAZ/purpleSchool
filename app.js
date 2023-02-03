const operations = [100, -20, 7, -20, 50];

// Вывод положительных операций через for
// const positiveOperations = [];
// for (const el of operations) {
//   if (el > 0) {
//     positiveOperations.push(el)
//   }
// }
// console.log(positiveOperations);

//filter - возвращает массив с элементами, удовлетворяющих условию

const positiveOperations = operations.filter(el => {
  return el > 0;
});
console.log(positiveOperations);

//Чейнинг методов

const positiveRUBOperations = operations
  .filter(el => {
    return el > 0;
  })
  .map(el => el * 60);
console.log(positiveRUBOperations);

