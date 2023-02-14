//Call, apply 

'use strict';

const audi = {
  make : 'Audi',
  model: 'A3',
  year: 2021,
  damages: [],
  addDamage (part, rate) {
    console.log(`У авто ${this.make} ${this.model} ${this.year} добавлено: - повреждение ${part} со степенью ${rate}`);
    this.damages.push({
      part,
      rate
    })
  }
}

audi.addDamage('Капот', 1);

const bmw = {
  make : 'BMW',
  model: 'X5',
  year: 2022,
  damages: []
};

bmw.addDamage = audi.addDamage;
bmw.addDamage('Бампер', 2);


const addDamageFunc = audi.addDamage;
// addDamageFunc('Бампер', 2); // undefined - потомучто это обычная функция, не объект

//Call - вызови функцию а дальше на каком контексте и с какими аргументами

addDamageFunc.call(bmw, 'Бампер', 2);
addDamageFunc.call(audi, 'Бампер', 2);

//Apply - приминить метод на каком то объекте, аргументы записываются в массив

addDamageFunc.apply(bmw, ['Бампер', 2])

