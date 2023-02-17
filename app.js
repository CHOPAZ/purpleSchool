/*
  Добавление html на лету

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
}

function inputChanged(event) {
  if (event.code === 'Enter') {
    submitForm();
  }
}

//Создание элемента

const panelText = 'Панель';
const pannelButton = 'button';
const newElement = document.createElement('div');
newElement.setAttribute('user-id', 1);
newElement.classList.add('panel');
// newElement.innerText = 'Кнопка'
newElement.innerHTML = `<button class="${pannelButton}">${panelText}</button>`

document.querySelector('.test').appendChild(newElement);