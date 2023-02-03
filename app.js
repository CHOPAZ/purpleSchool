//map - итерируется по массиву, и возвращает новый массив
const transactionInUSD = [10, -7, 50, -10, 100];

// Сколько в рублях были транзакции через for
const transactionInRUB = [];
for (const el of transactionInUSD) {
  transactionInRUB.push(el * 60);
}
console.log(transactionInRUB); //[600, -420, 3000, -600, 6000]
console.log(transactionInUSD); //[10, -7, 50, -10, 100]


//через map

const transactionInRUB2 = transactionInUSD.map((el) => {
  return el * 60
});
// const transactionInRUB2 = transactionInUSD.
//  map((el) => el * 60);

console.log(transactionInRUB2); //[600, -420, 3000, -600, 6000]
console.log(transactionInUSD); //[10, -7, 50, -10, 100]
