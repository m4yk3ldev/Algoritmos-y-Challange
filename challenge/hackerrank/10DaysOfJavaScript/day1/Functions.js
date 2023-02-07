// https://www.hackerrank.com/challenges/js10-function/problem?isFullScreen=true

function factorial(n) {
  if (n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

console.log(factorial(4));
