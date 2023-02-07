/**
 * @param {string} inputString
 */
function solution(inputString) {
  const regex = /\((\w*?)\)/g

  const replacer = (_, y) => {
    return `${y.split('').reverse().join('')}`
  }
  while (inputString.includes('(') || inputString.includes(')')) {
    inputString = inputString.replace(regex, replacer)
    console.log(inputString)
  }

  return inputString
}

console.log(solution('(bar)')) //-> rab
console.log(solution('foo(bar)baz')) //-> foorabbaz
console.log(solution('foo(bar)baz(blim)')) //-> foorabbazmilb
console.log(solution('foo(bar(baz))blim')) //-> foobazrabblim
