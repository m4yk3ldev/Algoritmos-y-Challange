/**
 * @param {number[]} a
 */
function solution(a) {
  let result = Array(2).fill(0)
  a.map((value, i) => {
    result[i % 2] += value
  })
  return result
}

console.log(solution([50, 60, 60, 45, 70])) //-> [180, 105]
