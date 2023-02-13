// Контекст в методах

'use strict';

const user = {
  firstName: 'Vasya',
  lastName: 'Pupkin',
  age: 20,
  getUserInfo: function() {
    console.log(this);
    console.log(`${this.firstName} ${this.lastName}`);

    function canDrink() {
      if(this.age >= 18) {
        console.log('Может уже пить!');
      } else {
        console.log('Не может уже пить!');
      }
    }
    canDrink();// будет ошибка так как this undefined, для решения использовать стрелочную функцию
  },
  getUserInfoArrow: () => {
    console.log(this);//window
    console.log(`${this.firstName} ${this.lastName}`);
  }  
}

user.getUserInfo();//Vasya Pupkin
user.getUserInfoArrow();//undefined undefined