// Arguments

'use strict';

function sumNum(num1, num2) {
  console.log(this);//undefined
  console.log(arguments); // object - Arguments(2) [1, 4, callee: (...), Symbol(Symbol.iterator): ƒ]
  return num1 + num2;
}

//arguments - num1 num2

console.log(sumNum(1,4));

const sumNum2 = (num1, num2) => {
  console.log(this);//window
  console.log(arguments); // Uncaught ReferenceError: arguments is not defined
  return num1 + num2;
}

console.log(sumNum2(1,4));