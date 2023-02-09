const sum = 1;
console.log(sum);

function add5(n) {
  n = n + 5;
  if (n > 10) {
    return n
  }
  console.log(n);
  return add5(n)
}

add5(sum);
console.log('ended');