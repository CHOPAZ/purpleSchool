const users = ['Anya', 'Vika', 'Katya'];
console.log(users);

//ЗАмена элемента массива
users[2] = 'Cristina';
console.log(users);

//Добавление элемента в массив
users[3] = 'Nikita';
console.log(users);

users[5] = 'Sasha';// 4 - элемент массива юудет empty
console.log(users);

// Удобные методы добавления и удаления элементов

users.push('Pasha'); // Добавление в КОНЕЦ массива
// const arrLength = users.push('Pasha'); // длина массива 7

users.unshift('Dima') // Добавление в НАЧАЛО массива
users.pop(); // Удаление ПОСЛЕДНЕГО элемента массива
users.shift();// Удаление ПЕРВОГО элемента массива

