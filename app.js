const roles = ['user', 'admin', 'manager', 'superuser'];

//slice - не изменяет исходный массив, вырезает указанный диапазон элементов массива
const res = roles.slice(2);// ['manager', 'superuser'] - начальный индекс и до конца
const res2 = roles.slice(2,3); // ['manager'] - 2 - это начальный индекс, 3- конечный индекс не включительно
const res3 = roles.slice(-1); //['superuser'] - берет последний элемент массива. она похожа на запись roles[roles.length - 1]
const res4 = roles.slice(1, -1); //['admin', 'manager']


// splice - изменяет исходный массив. Работает подругому чем slice. Вторым элементом берет не конечный индекс, а длину элементов которую нужно взять

//Для наглядного примера необходимо закоментить
// const res5 = roles.splice(2);//['manager', 'superuser']
// const res6 = roles.splice(2, 2);// ['manager', 'superuser']
// const res7 = roles.splice(2, 1);// ['manager']
// const res8 = roles.splice(-1);//['user', 'admin', 'manager']
// console.log(res6);
// console.log(roles);//['user', 'admin']

//reverse - переворачивает массив. Изменяет исходный массив

// const res8 = roles.reverse()
// console.log(res8);//['superuser', 'manager', 'admin', 'user']
// console.log(roles);//['superuser', 'manager', 'admin', 'user']

//Конкатенация массива - соединение массива
const newRoles = ['sysadmin', 'developer'];
const res9 = roles.concat(newRoles)
console.log(res9);//['user', 'admin', 'manager', 'superuser', 'sysadmin', 'developer']