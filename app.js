//Примитивы и объекты

'use strict';

const user = {
  name: 'Anton',
  id: 1
};

user.name = 'Pasha';
console.log(user); // {name: 'Pasha', id: 1}

const user2 = user;
user.name = 'Bogdan'
console.log(user);
console.log(user2);

// Как добится такого эффекта, что бы они были разными

//Вариант 1
const user3 = Object.assign({}, user);
user.name = 'Vitya'
console.log(user3);//{name: 'Bogdan', id: 1}
console.log(user); // {name: 'Vitya', id: 1}

//Вариант 2
const user4 = {
  ...user
};
user.name = 'Sasha';
user4.bord = '123';
user4.gift = ['Admin']
console.log(user4);//{name: 'Vitya', id: 1}
console.log(user); // {name: 'Sasha', id: 1}
