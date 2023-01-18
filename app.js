/*
	Методом prompt получите ответ пользователя
	на вопрос "Сколько будет 7 + или - 15?". Если ответ верен
	выведите в консоле "Успех", если нет - "Вы робот!",
	а если он введёт "Я не робот", то тоже "Успех".
*/


const askUser = prompt('Сколько будет 7 + или - 15?')

switch (true) {
  case Number(askUser) === 22:
    console.log('Good');
    break;
  case Number(askUser) === -8:
    console.log('Good');
    break;
  case askUser === 'Я не робот':
    console.log('Good');
    break;
  default:
    console.log('Error');
    break;
}

switch (true) {
  case Number(askUser) === 22:
  case Number(askUser) === -8:
  case askUser === 'Я не робот':
    console.log('Good');
    break;
  default:
    console.log('Error');
    break;
}