/**
 * @param {number[]} a
 */
function solution(a) {
  let min = Infinity
  let pos = a[0]
  a.forEach((v) => {
    let sum = 0
    for (let j = 0; j < a.length; j++) {
      sum += Math.abs(a[j] - v)
    }
    if (sum < min) {
      min = sum
      pos = v
    }
  })
  return pos
}

console.log(solution([2, 4, 7])) //-> 4
console.log(solution([2, 2])) //-> 2
console.log(solution([1, 1, 3, 4])) //-> 1
console.log(solution([0, 7, 9])) //-> 7

/*
Para a = [2, 4, 7], la salida debería ser solution(a) = 4.

para x = 2, el valor será abs(2 - 2) + abs(4 - 2) + abs(7 - 2) = 7.
para x = 4, el valor será abs(2 - 4) + abs(4 - 4) + abs(7 - 4) = 5.
para x = 7, el valor será abs(2 - 7) + abs(4 - 7) + abs(7 - 7) = 8.
El valor más bajo posible es cuando x = 4, por lo que la respuesta es 4.

Para a = [2, 3], la salida debería ser solution(a) = 2.

para x = 2, el valor será abs(2 - 2) + abs(3 - 2) = 1.
para x = 3, el valor será abs(2 - 3) + abs(3 - 3) = 1.
Debido a que hay un empate, el más pequeño xentre x = 2y x = 3es la respuesta.
*/
