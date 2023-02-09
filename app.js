//Примитивы и объекты

'use strict';

let name1 = 'Anton';
let name2 = name1;
name1 = 'New';
console.log(name1);//New
console.log(name2);// Anton;

const user1 = {
  name: 'Anton'
}

const user2 = user1;
user2.name = 'New'

console.log(user1);//New
console.log(user2);//New

//Это поведение отличается от  примитивов, это связано с тем что объекты это ссылочный тип данных - подробное описание в видео