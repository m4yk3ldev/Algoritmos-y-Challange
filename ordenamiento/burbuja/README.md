# Algoritmo de Ordenación de Burbuja (Bubble)

## Logica
El algoritmo de ordenamiento de burbuja (Bubble Sort) es un algoritmo de clasificación simple, que consiste en recorre repetidamente la lista de entrada elemento por elemento, comparando el elemento actual con el siguiente, intercambiando sus valores si es necesario. Estos pases a través de la lista se repiten hasta que no haya que realizar intercambios durante un pase, lo que significa que la lista se ha ordenado por completo. 
Obtiene el nombre por la forma en que los elementos más grandes "burbujean" hasta la parte superior de la lista.

## Complejidad

| Name                  | Best            | Average             | Worst               | Memory    | Stable    
| --------------------- | :-------------: | :-----------------: | :-----------------: | :-------: | :-------: 
| **Bubble sort**       | n               | n<sup>2</sup>       | n<sup>2</sup>       | 1         | Yes       

### Ejemplo
![Algorithm Visualization](https://upload.wikimedia.org/wikipedia/commons/c/c8/Bubble-sort-example-300px.gif)

## Ejemplo en JS
```javascript
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
```

## Ejemplo en Python

```py
def bubbleSort(arr):
    lenArr = len(arr)
    for i in range(lenArr):
        for j in range(0, lenArr-i-1):
            if (arr[j] > arr[j+1]):
                tmp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = tmp
    return arr
```