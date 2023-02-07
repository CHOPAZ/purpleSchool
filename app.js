// Методы объектов - this - контекст (про него в отдельном модуле 15, 16)

const user = {
    name: 'Вася',
    surname: 'Пупкин',
    age: 24,
    getFullName: function() {
      return this.name + ' ' + this.surname
    }
}

console.log(user.getFullName());
