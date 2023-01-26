// Введение в функции

function logName(name, surname) {
  console.log(`My name ${name} ${surname}`);
  return undefined // формаольно возвращает undefined
}

logName('Pavel', 'Kvasnickiy');
const a = logName('pavel', 'Kvasnickiy ')

console.log(typeof a);


function countDepositSum(depositInUSD, month, rate) {
   return depositInUSD * (1 + rate / 12) ** month;
  
}

const example1 = countDepositSum(1000, 24, 0.12)
console.log(example1);

const example2 = countDepositSum(1000, 48, 0.10)
console.log(example2);
