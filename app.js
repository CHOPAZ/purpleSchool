/*
  Что такое this?

  Переменная, которая создается для каждого контекста исполнения. Она указывает на владельца этой функции

  this не статичен и определяется только при вызове функции в зависимости от того, как она вызвана
*/

'use strict';

console.log(this); //window
console.log(window); //window

function addNum(num1, num2) {
  console.log(this); // undefined - при use strict, без него ссылкается на window
  return num1 + num2
}

const  addNum2 = (num1, num2) => {
  console.log(this); // window - при use strict
  return num1 + num2
}

addNum();
addNum2();

const user = {
  name: 'Vasya',
  surname: 'Pupkin',
  getFullName: function() {
    console.log(this);
    return this.name + ' ' + this.surname
  }
}
user.getFullName(); // this - user

const user2 = {
  name: 'Petya',
  surname: 'ASF'
}

user2.getFullName = user.getFullName;
user2.getFullName(); // this - user2

const getFullName = user2.getFullName;

getFullName() // this - undefined и ошибка
