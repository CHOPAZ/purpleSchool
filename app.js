//Итерирование по объекту
const cities = {
  msc: {
    let: 200,
    temp: 25
  },
  spb: {
    let: 100,
    temp: 20
  }
}

//Посчитать среднюю температуру в городах

//Неоптимальная запись
let avgTemp = 0;
let citiesCount = 0;
for(const key in cities) {
  citiesCount++;
  avgTemp += cities[key].temp
}
console.log(avgTemp / citiesCount);

// Оптимальная запись
let avgTemp2 = 0;
let citiesCount2 = Object.keys(cities).length; // берет наш объект и из ключей делает массив, и длина будет и количество ключей
console.log(Object.keys(cities)); // ['msc', 'spb']
console.log(Object.keys(cities).length); // 2
for(const key in cities) {
  avgTemp2 += cities[key].temp
}
console.log(avgTemp2 / citiesCount2);

//идентичная запись  через for of
for(const key of Object.keys(cities)) {
  avgTemp2 += cities[key].temp
}