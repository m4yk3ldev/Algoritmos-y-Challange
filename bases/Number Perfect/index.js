/**
 * @param {number} n
 */
function isNumberPerfect(n) {
  let sum = 0;
  for (let i = 1; i < n; i++) {
    if (n % i === 0) {
      sum += i;
      console.log(i);
    }
  }
  return n === sum;
}

console.log(isNumberPerfect(6));
