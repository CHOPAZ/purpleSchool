/*
 Сделать функцию пользователя, которая берет за основу userInfo и за счет замыкания создает новый объект, с которым можно работать как user1().increse(100)

*/
'use strict';

const userInfo = {
  balance: 0,
  operations: 0,
  increse (sum) {
    this.balance += sum;
    this.operations++
  }
}

function user () {
  const userObj = {
    ...userInfo
  };
  return function () {
    return userObj
  }
}

const user1 = user();
user1().increse(100)
user1().increse(100)
console.log(user1());

const user2 = user();
user2().increse(100);
user2().increse(100);
user2().increse(100);
user2().increse(100);
console.log(user2());

const user3 = user();
user3().increse(1000);
console.log(user3());