/*
  Создайте объект пользователя с паролем.
  С помощью функции ниже удалить пароль, сделав функцию сброса пароля
*/
'use strict';

function removePassword(reset) {
  if (reset) {
    this.password = undefined;
  } else {
    this.password = '1'
  }
}


const user = {
  login: 'admin',
  password: '12345'
};

const resetUserPass = removePassword.bind(user, true);

resetUserPass();
console.log(user);