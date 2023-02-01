/**
 *
 * @param {number[]} arr
 */
function bubbleSort(arr) {
  // Guardar el length del array
  let len = arr.length;
  //   Inicio de ciclo para recorrer el array
  for (let i = 0; i < len; i++) {
    /* 
    Recorrer otra vez el arreglo revisando si esta ordenado el array 
    donde la posición a revisar e len - i,
     ya que no es necesario recorrer todo el arreglo otra vez 
    */
    for (let j = 0; j < len - i; j++) {
      // Revisar si el elemento de la derecha es mayor al de la izquierda
      if (arr[j] > arr[j + 1]) {
        // Si cumple la condición se intercambian los calores del arr[j] pasarlo a arr[j+1] y viceversa
        let tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
      }
    }
  }

  return arr;
}

console.log(bubbleSort([2, 7, 1, 4, 3, 5, 0, 8, 2, -1, 2]));
