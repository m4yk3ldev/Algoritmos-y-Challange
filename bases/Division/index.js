/**
 * @param {number} a
 * @param {number} b
 */
function Div(a, b) {
  let value = 0;
  while (a >= b) {
    value++;
    a -= b;
  }
  console.log(value);
  return value;
}

Div(18, 3); //->
