/**
 * @param {number} a
 * @param {number} b
 */
function Div(a, b) {
  let value = 0;
  for (let i = 0; i < a; i++) {
    value -= b;
  }
  return value;
}

console.log(Div(6, 3)); //->
