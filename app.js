const roles = ['user', 'admin', 'manager', 'superuser'];

const url = 'auth/user/login';
//split - разбить, аргументом принимает символ по которому нужно разбить
const res = url.split('/')
console.log(res); //['auth', 'user', 'login']

//join - объединяет элементы массива в строку
console.log(roles.join('-'));// user-admin-manager-superuser