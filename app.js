//Строки и массивы. Преобразование в массив и обратно

const userFullName = 'Вася Пупкин Васильевич';
console.log(userFullName.split(' ')); //['Вася', 'Пупкин', 'Васильевич']

const [firstName, familyName, lastName] = userFullName.split(' ')
console.log(firstName);//Вася
console.log(familyName);//Пупкин
console.log(lastName);//Васильевич

//Обратно в массив join

const arr = ['Ты', 'Значешь', 'JS'];
console.log(arr.join(' '));