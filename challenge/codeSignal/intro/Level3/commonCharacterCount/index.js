/**
 * @param {string} s1
 * @param {string} s2
 */
function solution(s1, s2) {
  // Init counter
  let count = 0
  for (let i of s1) {
    const j = s2.indexOf(i)
    if (j >= 0) {
      count++
      s2 = s2.replace(i, '')
    }
  }
  return count
}
console.log(solution('aabcc', 'adcaa')) //-> 3
