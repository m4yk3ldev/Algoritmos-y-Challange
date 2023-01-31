/**
 * @param {number} a
 * @param {number} b
 */
function Pow(a, b) {
  if (b == 0) return 1;
  if (b == 1) return a;
  for (let i = 1; i < b; i++) {
    a *= a;
  }
  return a;
}

console.log(Pow(11, 2));
