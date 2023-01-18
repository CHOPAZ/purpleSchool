const role = 'manager';

if (role === 'manager') {
  console.log('Manager');
} else if (role === 'admin') {
  console.log('Admin');
} else if (role === 'Ceo') {
  console.log('CEO');
} else {
  console.log('Go back');
}

switch (role) {
  case 'manager': // role === 'manager'
    console.log('Manager');
    break;
  case 'admin': // role === 'admin'
    console.log('Admin');
    break;
  case 'ceo': // role === 'ceo'
    console.log('Ceo');
    break
  default:
    console.log('Go back');
    break;
}

switch (role) {
  case 'manager':
  case 'admin':
    console.log('Не руководитель');
    break;
  case 'ceo':
    console.log('Руководитель');
    break
  default:
    console.log('Go back');
    break;
}

const num = 1;

switch (true) {
  case num > 0: // true === num > 0
    console.log('Положительный');
    break;
  case num < 0: // true === num < 0
    console.log('Отрицательный');
    breake;
  default: // true === num === 0
    console.log('Ноль!');
    break;
}