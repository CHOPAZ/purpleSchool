//Деструктуризация и rest на основе объектов
const arr = [1, 2, 3, 4];
const [z,y,x] = arr;
console.log(z);// 1
console.log(y);// 2


let user = {
  name: 'Vasya',
  age: 40,
  city: 'Moscow'
}

const {age, name, ...userWithCity} = user;
console.log(age); // 40
console.log(name); // Vasya
console.log(userWithCity);

// Есть и спред

const additionalData = {
  skills: ['Разработка', 'Дизайн'],
  creditCard: '1234-1234-1234-1234'
};

// Неудобно
user.skills = additionalData.skills;
user.creditCard = additionalData.creditCard
console.log(user); //{name: 'Vasya', age: 40, city: 'Moscow', skills: Array(2), creditCard: '1234-1234-1234-1234'}

//ТЕперь со спред оператором

user ={
  ...user,
  ...additionalData
}
console.log(user); // {name: 'Vasya', age: 40, city: 'Moscow', skills: Array(2), creditCard: '1234-1234-1234-1234'}
