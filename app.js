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


//JSON -Java Script Object Notation - нотация описания объекта совместимый с JS и не только с ним 
/* как выглядит JSON:
  [
    {
      "key": "string",
      "num": 5,
      "boolean": false,
      "arr": ["s", "d"],
      "obj": {
        "innerKey": "3"
      }
    }
]
*/

const obj = JSON.parse('{ "a": 1 }')
console.log(obj); //{a: 1} - объект

const str = JSON.stringify(obj);
console.log(str); // {"a":1} - строка