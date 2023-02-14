/*
  Замыкание

*/
'use strict';

function changeBalance () {
  let balance = 0;
  return function(sum) {
    balance += sum;
    console.log(`Баланс: ${balance}`);
  }
}

const change = changeBalance(); // change будет равнятся return function(sum)
change(100);
change(-50);
change(200);

// Замыкание - это комбинация функции и лексического окружения, в котором эта функция была определена.

//Простыми словами: Функция помнит, в каком контексте она была создана и может его использовать

console.dir(change)