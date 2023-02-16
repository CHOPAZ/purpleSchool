/*
  Обработка нажатий

*/

'use strict'

// document.querySelector('.button').addEventListener('click', (event) => {
//   console.log(event); // детальная инфа о событии которое произошло - но об этом потом
// })

// document.querySelector('.button').addEventListener('click', () => {
//   const input = document.querySelector('.input').value
//   if (!input) {
//     return
//   }
//   document.querySelector('.panel').innerText = input
//   document.querySelector('.input').value = '';
// })


//Запись подругому

function changeClick () {
  const input = document.querySelector('.input').value
  if (!input) {
    return
  }
  document.querySelector('.panel').innerText = input
  document.querySelector('.input').value = '';
}

//теперь для его вызова мы переходим в HTML и записываем его кнопке

