// Оператор нулевого слияния ??  Nullish coalescing operator проверяет на null и undefined

const age = 0;
const userName1 = '';
console.log(age || 18); // 18
console.log(age ?? 18); // 0