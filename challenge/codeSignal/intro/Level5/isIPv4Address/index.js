/**
 * @param {string} inputString
 */
function solution(inputString) {
  return /^(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}$/gm.test(
    inputString
  )
}

console.log(solution('172.16.254.1')) //-> true
console.log(solution('172.316.254.1')) //-> false
console.log(solution('.254.255.0')) //-> false
