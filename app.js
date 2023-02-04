//Быстрое создание массивов

const arr = [1, 2, 3, 4, 5, 6];
console.log(new Array(1, 2, 3, 4, 5, 6));

//создание пустого массива определенной длины
const arr2 = new Array(5); //(5) [empty × 5]
console.log(arr2);
//заполнение пустого массива
arr2.fill(1); // [1, 1, 1, 1, 1]
arr2.fill(2, 0, 3); // [2, 2, 2, 1, 1]
arr2.fill(3, 3, 5); // [2, 2, 2, 3, 3]
console.log(arr2);

const arr3 = Array.from({ length: 5 }, () => 6); //[6, 6, 6, 6, 6]
console.log(arr3);
const arr4 = Array.from({ length: 5 }, (cur, i) => i + 1); //[1, 2, 3, 4, 5]
console.log(arr4);
