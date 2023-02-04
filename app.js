
//flat - делает плоский массив
const prices = [[2, 4], [3, 4], [10, 20]];
const res = prices.flat(); //[2, 4, 3, 4, 10, 20]
console.log(res);

const prices2 = [[2, 4], [3, 4], [10, [20, 30]]];
const res2 = prices2.flat();//[2, 4, 3, 4, 10, [20, 30]]
console.log(res2); 
const res3 = prices2.flat(2) //[2, 4, 3, 4, 10, 20, 30]
console.log(res3);

// flatMap - применение сначала map потом flat
const prices3 = [[2, 4], [3, 4], [10, [20, 30]]];
const res4 = prices3.flatMap(el => el.concat([1])) //[2, 4, 1, 3, 4, 1, 10, [20, 30], 1]
console.log(res4);
