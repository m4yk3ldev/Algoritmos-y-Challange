/**
 * @param {string[]} inputArray
 */
function solution(inputArray) {
  let ret = false
  let solution = []
  const checkSolution = () => {
    for (let i = 0; i < solution.length - 1; i++) {
      let diff = 0
      for (let j = 0; j < solution[i].length; j++) {
        if (solution[i][j] !== solution[i + 1][j]) {
          diff++
        }
      }
      if (diff !== 1) {
        return false
      }
    }
    return true
  }
  const bt = () => {
    for (let i = 0; i < inputArray.length; i++) {
      if (ret) break
      solution.push(inputArray.splice(i, 1)[0])
      if (inputArray.length === 0) {
        ret = ret || checkSolution()
      } else {
        bt()
      }
      inputArray.splice(i, 0, solution.pop())
    }
  }

  bt()
  return ret
}

console.log(solution(['aba', 'bbb', 'bab'])) //-> false
/*
Esta función está comprobando si los elementos de inputArray pueden formar una cadena, en la que cada par consecutivo de elementos tenga solo un carácter diferente.

Utiliza un enfoque de retroceso (backtracking) para generar todas las combinaciones posibles de los elementos de inputArray y verificar si alguno de ellos forma una cadena válida. La función "checkSolution" verifica si la combinación actual es una cadena válida. Si lo es, se establece "ret" en "verdadero" y se detiene el retroceso. Si no es así, la función continúa generando más combinaciones hasta que haya comprobado todas las combinaciones posibles o "ret" se haya establecido en "verdadero".
*/
