/*
  преобразовать пользователей до вида {fullName: 'Вася Пупкин, skillNum: 2}
*/

const users = [
  {
    name: 'Вася',
    surname: 'Пупкин',
    age: 30,
    skills: ['Разработка', 'Dev0ps']
  },
  {
    name: 'Катя',
    surname: 'Белова',
    age: 18,
    skills: ['Дизайн']
  },
]

const users2 = users.map((user) => {
  return {
    fullName:`${user.name} ${user.surname}`,
    skillNum: user.skills.length
  }
})
console.log(users2);
