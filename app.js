/* 
  Найти среднее значение последовательности чисел с помощью reduce
*/

const arr = [1, 4, 4, 10];

const avg = arr.reduce((prev, value, i) => {
  if (i != arr.length - 1) {
    return prev + value
  } else {
    return (prev + value) / arr.length
  }
}, 0)
console.log(avg);