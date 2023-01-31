// Resta sin operación

/**
 * @param {number} a
 * @param {number} b
 */
function sub(a, b) {
  let value = 0;
  while (a > b) {
    b++;
    value++;
  }
  return value;
}

console.log(sub(5, 3));
