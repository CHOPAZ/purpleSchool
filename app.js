const roles = ['user', 'admin', 'manager'];

// indexOf - ищет первое вхождение. Обычно используется для получения конкретного индекса
const elIndex = roles.indexOf('admin');
console.log(elIndex);
const elIndex2 = roles.indexOf('superUser');
console.log(elIndex2); // -1, т.к. нет такого элементта в массиве

if (roles.indexOf('admin') >= 0) {
  console.log('Доступ есть');
}

// includes - возвращает true or false
console.log(roles.includes('admin')); //true