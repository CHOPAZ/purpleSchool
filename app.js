/*
  DOM -document object modal - это объектное представление исходного HTML-кода документа.

  DOM не часть JS, это браузерое API, встроенное в браузер 

  Блягодаря ему мы можем обращаться к HTML элементам из JS

*/

'use strict'
console.log(document.querySelector('.panel'));
console.log(document.querySelector('.panel').innerHTML); //<span>I love this!</span>
console.log(document.querySelector('.panel').innerText);// I love this!

document.querySelector('.panel').innerText = 'New text'; // New text


document.querySelector('.input').value = 'Text' // инпут будет заполнен: Text

