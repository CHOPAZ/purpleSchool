const score = [5, 10, 0, 15];

//for
for (const el of score) {
  console.log(el);
}

for (const el in score) {
  console.log(`Раунд ${el + 1}: ${score[el]}`);
}

for (const [i, el] of score.entries()) {
  console.log(`Раунд ${i + 1}: ${el}`);
}

//forEach

// const iterator = el => {
//   console.log(`Раунд: ${el}`);
// }
// score.forEach(iterator)

score.forEach(el => {
  console.log(`Раунд: ${el}`);
})

score.forEach((el, i) => {
  console.log(`Раунд ${i + 1}: ${el}`);
})


// У forEach нет break и continue - поэтому его нельзя прервать !!! У forEach есть проблемы с Асинхронностью

