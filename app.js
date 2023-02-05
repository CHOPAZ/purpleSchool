/*
  Замаскировать все, кроме последних 4-х символов
*/

/*
  ************8353
*/

const card = '2342834503458353';

function disguise (card) {
  card = card.slice(-4).padStart(16, '*')
  return card
}
