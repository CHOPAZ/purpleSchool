// Стрелочные функции

// Обычная функция
function powerOfTwo(num) {
  return num * num;
}
console.log(powerOfTwo(5));

// Стрелочная функция

const poft = (num) => num * num;

const poft1 = num => num * num;

const poft2 = num => {
  console.log(num);  
  return num * num
};


console.log(poft(5));

// Отличие всплытие, контекст - про контекст будет дальше


console.log(poft3(5)); // ошибка, poft еще не задана
const poft3 = (num) => num * num;