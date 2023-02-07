function solution(inputString) {
  // Is palindrome if inputString is equal to inputString inverse
  // Convert inputString to array with split('')
  // Until inputString with reverse() reverse the array
  // Until convert inputString to string with join('')
  return inputString === inputString.split('').reverse().join('')
}

module.exports = solution
