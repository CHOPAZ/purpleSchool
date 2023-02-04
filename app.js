//sort - сортировка. Меняет исходный массив

const users = ['Vasya', 'Masha', 'Olya', 'Pasha'];
console.log(users);

// отсортировать по алфавитук
users.sort(); // ['Masha', 'Olya', 'Pasha', 'Vasya']
console.log(users);

const operations = [100, -20, 30, 480, -200];
console.log(operations);
operations.sort(); //[-20, -200, 100, 30, 480] - отсортировалить как строки
console.log(operations);

const operations2 = [100, -20, 30, 480, -200];

//sort принимает callback, которая содержит два параменра a - 1 элемент, b - 2 элемент, эта ункция должна вернуть либо + либо - значение, в зависимости от того что она вернет, будет порядок либо сохранен либо изменен
/*
  Про порядок:
  < 0 - a, b - сохраняем порядок
  > 0 - b, a - меняем порядок
*/
// длинная запись сортировка по возрастанию
operations2.sort((a, b) => {
  if (a > b) {
    return 1;
  }
  if (a < b) {
    return -1;
  }
})
console.log(operations2);

//  длинная запись сортировка по убыванию
const operations3 = [100, -20, 30, 480, -200];
operations3.sort((a, b) => {
  if (a > b) {
    return -1;
  }
  if (a < b) {
    return 1;
  }
})

console.log(operations3);

// короткая записиь сортировки по убыванию
const operations4 = [100, -20, 30, 480, -200];
operations4.sort((a,b) => a - b);
console.log(operations4);
