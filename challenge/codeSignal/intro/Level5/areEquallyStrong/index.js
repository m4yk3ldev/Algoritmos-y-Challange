/**
 * @param {number} yl
 * @param {number} yr
 * @param {number} fl
 * @param {number} fr
 */
function solution(yl, yr, fl, fr) {
  return (yl === fl || yl === fr) && yl + yr === fl + fr
}

console.log(solution(10, 15, 15, 10)) // -> true
console.log(solution(15, 10, 15, 10)) // -> true
console.log(solution(15, 10, 15, 9)) // -> false
console.log(solution(10, 5, 5, 10)) // -> true
