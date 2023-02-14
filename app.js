//Bind - похож на call и apply, но сразу не вызывает ее

'use strict';

const audi = {
  make : 'Audi',
  model: 'A3',
  year: 2021,
  damages: [],
}

const carManipulation = {
  addDamage (part, rate) {
    this.damages.push({
      part,
      rate 
    })
  }
};

const addDamageAudi = carManipulation.addDamage.bind(audi);
addDamageAudi('Крыло', 3);

const addDamageAudiRoof = carManipulation.addDamage.bind(audi, 'Крыша');
addDamageAudiRoof(5);

console.log(audi);