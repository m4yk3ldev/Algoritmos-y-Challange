/**
 * @param {number[]} inputArray
 * @param {number} elemToReplace
 * @param {number} substitutionElem
 */
function solution(inputArray, elemToReplace, substitutionElem) {
  return inputArray.map((a) => (a === elemToReplace ? substitutionElem : a))
}

console.log(solution([1, 2, 3], 1, 3)) //-> [3,2,3]
