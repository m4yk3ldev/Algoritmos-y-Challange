/**
 * @param {number} a
 * @param {number} b
 */
function Multiply(a, b) {
  let value = 0;
  for (let i = 0; i < a; i++) {
    value += b;
  }
  return value;
}

console.log(Multiply(2, 3)); //->
