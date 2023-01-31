/**
 * @param {number} a
 */
function Factorial(a) {
  if (a === 0) return 1;
  let value = 1;
  for (let i = 0; i < a; i++) {
    value *= i + 1;
  }
  return value;
}

console.log(Factorial(10));
