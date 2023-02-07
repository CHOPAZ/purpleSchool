//Optional chaining - доступ к свойствам если их нет 

const cities = {
  msk: {
    temp: {
      celcius: 25
    }
  },
  spb: {

  }
}
console.log(cities.msk.temp.celcius); // 25

// P.s. - попытка взять свойство объекта у undefined вызовет ошибку

// console.log(cities.spb.temp.celcius); // ошибка, tmp - undefined

//Как правильно обратится - неудобно
if(cities.spb  && cities.spb.temp) {
  console.log(cities.spb.temp.celcius);
}
/* 
if(cities.spb != undefined  && cities.spb.temp != undefined) {
  console.log(cities.spb.temp.celcius);
}
*/

let city = 'msk';
if(cities[city]  && cities[city].temp) {
  console.log(cities[city].temp.celcius);
}

//Как правильно обратится - удобно и правильно через Optional chaining - ?.
console.log(cities[city]?.temp?.celcius);