/*
  key: 'text', value: {text: 'asd'}
*/

'use strict'
function submitForm () {
  const input = document.querySelector('.input').value
  if (!input) {
    return
  }
  document.querySelector('.panel').innerText = input
  document.querySelector('.input').value = '';
  document.querySelector('.notification').classList.add('notification_active');
  // const obj = JSON.parse(`{"text": "${input}"}`);
  // const str = JSON.stringify(obj);
  const textString = JSON.stringify({
    text: input
  });
  localStorage.setItem('text', textString);
}

function inputChanged(event) {
  if (event.code === 'Enter') {
    submitForm();
  }
}


const obj = JSON.parse('{ "a": 1 }')
console.log(obj); //{a: 1} - объект

const str = JSON.stringify(obj);
console.log(str); // {"a":1} - строка


console.log(document.querySelector('.button.btn'));