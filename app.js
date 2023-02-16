/*
 Обработка событий клавиатуры

*/

'use strict'

function submitForm () {
  const input = document.querySelector('.input').value
  if (!input) {
    return
  }
  document.querySelector('.panel').innerText = input
  document.querySelector('.input').value = '';
}



// document.querySelector('.input').addEventListener('keydown', (event) => {
//   // console.log(event); //KeyboardEvent {isTrusted: true, key: 'f', code: 'KeyF', location: 0, ctrlKey: false, …}

//   if (event.code === 'Enter') {
//     submitForm();
//   }
// })

//Так же мы можем не через addEventListener, привязаться в самому input в HTML

function inputChanged(event) {
  if (event.code === 'Enter') {
    submitForm();
  }
}
