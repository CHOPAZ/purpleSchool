/*
 Работа со стилями и классами

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
  document.querySelector('.notification').style.display = 'block'
}

//Второй вариант через работу с классами - добавим в файл стилей модификатор notification_active

function submitForm () {
  const input = document.querySelector('.input').value
  if (!input) {
    return
  }
  document.querySelector('.panel').innerText = input
  document.querySelector('.input').value = '';
  document.querySelector('.notification').classList.add('notification_active')
  // document.querySelector('.notification').classList.remove('notification_active') // удаление класса
}



function inputChanged(event) {
  if (event.code === 'Enter') {
    submitForm();
  }
}
