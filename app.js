// Обращение к элементам

const user = {
  name: 'Vasya',
  sername: 'Pupkin',
  age: 24,
  skills: [
    'Programming',
    'Cooking'
  ],
  eduBasic: 'Школа 10',
  eduPro: 'МФТИ'
};

//Для рбращения к элементам исп. Member Acsess Notaition

console.log(user); //{name: 'Vasya', sername: 'Pupkin', age: 24, skills: Array(2)}
console.log(user.name); // Vasya
console.log(user.skills[0]); //Programming

//Обращение через Breaket Notation
console.log(user['skills']);

/*
Разница в обрашении между user.skills и user['skills'] заключается в том что user['skills'] доступно для расчетныйх свойст, а user.skills - нет.
Что имеется в ввиду?

Допустим у пользователя несколько образованией eduBasic и eduPro и мы хотим обратится к элементу нашего пользователя в зависимости от того что мы запросили Basic or Pro 
*/
const level = 'Pro'
console.log(user['edu' + level]); // МФТИ
// console.log(user.'edu' + level); // Ошибка

// const res = prompt('Введите свойство');
// console.log(user[res]); //age - 24

//Добавляем свойства
user.city = 'Moscow';
user['city'] = 'Moscow';
console.log(user);

// Модификация существующих

user.age = 30;
user['age'] = 30
