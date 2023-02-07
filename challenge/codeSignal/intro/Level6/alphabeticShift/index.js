/**
 * @param {string} inputString
 */
function solution(inputString) {
  const alphabet = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ]
  return inputString
    .split('')
    .map((v) => (v === 'z' ? 'a' : alphabet[alphabet.indexOf(v) + 1]))
    .join('')
}

console.log(solution('crazy')) //-> dsbaz
