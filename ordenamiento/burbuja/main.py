def bubbleSort(arr):
    # Guardar el tamaño del array
    lenArr = len(arr)
    # Iterar sobre el array
    for i in range(lenArr):
        """
        Recorrer otra vez el arreglo revisando si esta ordenado el array 
        donde la posición a revisar e len - i,
        ya que no es necesario recorrer todo el arreglo otra vez 
        """
        for j in range(0, lenArr-i-1):
            # Revisar si el elemento de la derecha es mayor al de la izquierda
            if (arr[j] > arr[j+1]):
                # Si cumple la condición se intercambian los valores del arr[j] pasarlo a arr[j+1] y viceversa
                tmp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = tmp
    return arr


def sortedArray(arr):
    return sorted(arr)


print(bubbleSort([2, 7, 1, 4, 3, 5, 0, 8, 2, -1, 2]))
print(sortedArray([2, 7, 1, 4, 3, 5, 0, 8, 2, -1, 2]))
