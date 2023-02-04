const str = 'Вася Пупкина';

console.log(str.includes('а')); //true
console.log(str.startsWith('В')); // true
console.log(str.endsWith('н')); //true

// под капотом это выгледит так, new String - это объект, у которого есть свои методы
console.log(new String('Вася Пупкин').includes('a'));


// Преобразование строки, не модифицируют исходную строку

//простейшие преобразования
console.log(str.toLowerCase());//вася пупкина
console.log(str.toUpperCase());//ВАСЯ ПУПКИНА
console.log(str.replace('В', 'Ф'));//Фася Пупкина
console.log(str.replaceAll('а', 'и'));//Вися Пупкини
console.log(str.replace('/а/g', 'и'));//Вися Пупкини

const str2 = ' Вася Пупкина   \n';

//Если хотим очистить строку от пробелов вначале и конце
console.log(str2.trim()); //Вася Пупкина
console.log(str2.trimEnd());// _Вася Пупкина
console.log(str2.trimStart());//Вася Пупкина_



