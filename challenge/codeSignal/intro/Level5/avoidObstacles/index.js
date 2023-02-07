/**
 * @param {number[]} inputArray
 */
function solution(inputArray) {
  const max = Math.max(...inputArray)
  for (let i = 1; i < max; i++) {
    if (!inputArray.some((x) => x % i == 0)) return i
  }
  return max + 1
}
console.log(solution([5, 3, 6, 7, 9])) //-> 4
console.log(solution([2, 3])) //-> 4
console.log(solution([1, 4, 10, 6, 2])) //-> 7
