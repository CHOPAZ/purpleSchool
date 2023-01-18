const money = 10;
const canBuy = money > 50;

if (canBuy) {
  console.log('You can buy');
} else {
  console.log('No money');
}

if (money > 50) {
  console.log('You can buy');
} else {
  console.log('No money');
}

if (money > 50) {
  console.log('You can buy');
} else if (money > 5) {
  console.log('You can buy mini');
} else {
  console.log('No money');
}