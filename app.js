// Задание: проверить является ли это номером телефона России
/* верные */
const num1 = '89103235356'; // 11
const num2 = '+79103235356'; // 12
const num3 = '+7(910)3235356'; //14
const num4 = '+7(910) 323-53-56'; // 17
const num5 = ' +7(910) 323-53-56 '; // 19
/* не верные */
const num1Error = '89103235'; // 8
const num2Error = '+7d910d323-53-56';//16
const num3Error = '9+7103235356'; // 12
const num4Error = '89103g35356'; // 11

function isNumber (num) {
  num = num.trim()
  num = num.replace('+7', '8');
  if(!num.startsWith('8')) {
    return false
  }
  num = num.replaceAll('(', '');
  num = num.replaceAll(')', '');
  num = num.replaceAll('-', '');
  num = num.replaceAll(' ', '');
  if(num.length != 11) {
    return false
  }
  let onlyNum = true;
  for (const el of num) {
    if (isNaN(el)) {
      onlyNum = false;
      break;
    }
  }
  return onlyNum;
}

console.log(isNumber(num1));
console.log(isNumber(num2));
console.log(isNumber(num3));
console.log(isNumber(num4));
console.log(isNumber(num5));

console.log(isNumber(num1Error));
console.log(isNumber(num2Error));
console.log(isNumber(num3Error));
console.log(isNumber(num4Error));

console.log(isNaN(1234));//false
console.log(isNaN('1234'));//false
console.log(isNaN('g'));//true

console.log(Number.isNaN(123));//false
console.log(Number.isNaN('g'));
console.log(Number.isNaN('asfsaf'));



