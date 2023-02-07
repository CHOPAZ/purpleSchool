/*
	Сделать объект склад с методами добавления на склад, поиска
	по складку товара и расчёт веса
*/

const warehouse = {
  goods: [],
  findGoodById: function (id) {
   return  existedGood = this.goods.find(g => g.id === id);

  },
  addGood: function (good) {
    const existedGood = this.findGoodById(good.id)
    if(existedGood) {
      console.log('Этот товар уже есть на складе');
      return
    }
    this.goods.push(good)
  },
  getWeigthKg: function () {
    return this.goods.reduce((prev, el) => 
    prev += el.weight?.kg ? el.weight.kg : 0, 0)
  }
};

/* товары */

const car = {
  id: 1,
  name: 'Car',
  weight: {
    kg: 1000
  },
  brand: 'Ford'
};

const chair = {
  id: 2,
  name: 'Chair',
  weight: {
    kg: 2
  }
}

const paper = {
  id: 3,
  name: 'Paper',
  color: 'red'
}

warehouse.addGood(car);
warehouse.addGood(car); //Этот товар уже есть на складе
warehouse.addGood(chair);
warehouse.addGood(paper);
console.log(warehouse.goods);
let findeItems = warehouse.findGoodById(2);
console.log(findeItems);
const w = warehouse.getWeigthKg();
console.log(w);
