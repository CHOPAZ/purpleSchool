const secretNumber = '7';

if (secretNumber == 7) {
  console.log('Угадал не строго');
}
if (Number(secretNumber) === 7) {
  console.log('Угадал строго');
}
// == (нестрогое равенство) - проверка только по значению
//  === (строгое равенство) - проверка по значению и типу