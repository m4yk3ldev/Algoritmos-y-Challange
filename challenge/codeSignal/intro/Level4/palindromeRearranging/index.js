/**
 * @param {string} inputString
 */
function solution(inputString) {
  return (
    inputString
      .split('')
      .sort()
      .join('')
      .replace(/(\w)\1/g, '').length < 2
  )
}

console.log(solution('aabb')) // -> true
console.log(solution('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaabc')) // -> false
console.log(solution('abbcabb')) // -> true
console.log(solution('zyyzzzzz')) // -> true
console.log(solution('z')) // -> true
console.log(solution('zaa')) // -> true
console.log(solution('abca')) // -> false
console.log(solution('abcad')) // -> false
