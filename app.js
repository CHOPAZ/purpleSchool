const arr = [2, 4, 4, 10, 20];

// find - ищет конкретный элемент

// вот так работает find
let elGT5;
for (const el of arr) {
  if (el > 5) {
    elGT5 = el;
    break;
  }
}

console.log(elGT5);

elGT5 = arr.find(el => el > 5); // 10
console.log(elGT5);

//findeIndex - ищет индекс элемента удовлетворяющий условию

elGT5Index = arr.findIndex(el => el > 5) // 3
elGT5Index = arr.findIndex(el => el < 0) // -1
