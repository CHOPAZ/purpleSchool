/*
    Установка атрибутов. P.S -АТРИБУТ ВСЕГДА СТРОКА

*/

'use strict'
//Первый вариант
function submitForm () {
  const input = document.querySelector('.input').value
  if (!input) {
    return
  }
  document.querySelector('.panel').innerText = input
  document.querySelector('.input').value = '';
  document.querySelector('.notification').getAttribute('class')//получение атрибута
  document.querySelector('.notification').setAttribute('class', 'notification') // уберет все классы и змененит на notification - не очень вариант
  document.querySelector('.notification').setAttribute('key', 1) //установка своего атрибута 
  document.querySelector('.notification').setAttribute('user-id', 1) //установка своего атрибута 

}

function inputChanged(event) {
  if (event.code === 'Enter') {
    submitForm();
  }
}

console.log(document.querySelector('.one').innerText);//Элемент 1
console.log(document.querySelector('.one ~ div').innerText);//Элемент 2 - не очень хорошо
console.log(document.querySelector('#two').innerText);// Элемент 3
console.log(document.querySelector('[user-id="4"]').innerText);// Элемент 4

//Алтьтернативные пути
console.log(document.querySelectorAll('.one')[0].innerText)//Элемент 1
console.log(document.querySelectorAll('.one')[1].innerText)//Элемент 2
console.log(document.getElementById('two').innerText);//Элемент 3
console.log(document.querySelector('[user-id="4"]').innerText);// Элемент 4