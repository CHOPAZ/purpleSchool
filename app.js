/*
  Local Storage - хранение данных

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
  document.querySelector('.notification').classList.add('notification_active')
}

function inputChanged(event) {
  if (event.code === 'Enter') {
    submitForm();
  }
}

localStorage.setItem('token', 'asdsad');
localStorage.setItem('token1', 1);
localStorage.setItem('token2', true);

console.log(localStorage.getItem('token1'));
localStorage.removeItem('token2');
localStorage.clear()

