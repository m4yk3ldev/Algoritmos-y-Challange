/**
 * @param {string} name
 */
function solution(name) {
  return !!/^[a-zA-Z_][a-zA-Z\d_]*$/.test(name)
}

console.log(solution('var_1__Int')) //-> true
console.log(solution('qq-q')) //-> false
console.log(solution('2w2')) //-> false
console.log(solution(' variable')) //-> false
console.log(solution('va[riable0')) //-> false
console.log(solution('va[variable0')) //-> false
console.log(solution('a')) //-> true
console.log(solution('_Aas_23')) //-> true
