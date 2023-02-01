def bubbleSort(arr):
    lenArr = len(arr)
    for i in range(lenArr):
        for j in range(0, lenArr-i-1):
            if (arr[j] > arr[j+1]):
                tmp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = tmp
    return arr


print(bubbleSort([2, 7, 1, 4, 3, 5, 0, 8, 2, -1, 2]))
