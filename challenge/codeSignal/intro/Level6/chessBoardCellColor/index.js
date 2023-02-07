/**
 * @param {string } cell1
 * @param {string } cell2
 */
function solution(cell1, cell2) {
  return (
    (cell1.charCodeAt(0) + Number(cell1[1])) % 2 ===
    (cell2.charCodeAt(0) + Number(cell2[1])) % 2
  )
}

console.log(solution('A1', 'C3')) //-> true
console.log(solution('A1', 'H3')) //-> false
