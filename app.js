/* Функции в функциях*/

//Расчет стоимости по весу
const KG_IN_USD = 7;
const KM_IN_USD = 5;
const calculateW = present => present * KG_IN_USD; // 7$
const calculateKm = distance => distance * KM_IN_USD; // 5km


// present - вес подарка
function getExchangePrice(present1, present2, distance) {
  // стоимость  подарков если бы мы не использовали функции в функциях
  // const price1 = present1 * KG_IN_USD;
  // const price2 = present2 * KG_IN_USD;
  // const distancePrice =  distance * KM_IN_USD;
  // return price1 + price2 + distancePrice

  // стоимость при использовании функции в функциях
  const price1 = calculateW(present1);
  const price2 = calculateW(present2);
  const distancePrice = calculateKm(distance);
  return price1 + price2 + distancePrice
}

console.log(getExchangePrice(1, 2, 10));
