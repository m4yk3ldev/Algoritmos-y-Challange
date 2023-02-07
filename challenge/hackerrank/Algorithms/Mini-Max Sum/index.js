/*
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

/**
 * @param {number[]} arr
 */
function miniMaxSum(arr) {
  // Ordenar el arreglo de menos a mayor
  arr.sort(function (a, b) {
    return a - b;
  });

  // Encontrar la suma minima sumando los primeros cuatro elementos del arreglo
  const min_sum = arr.slice(0, 4).reduce((a, b) => a + b);

  // Encontrar la suma maxima sumando los ultimos cuatro elementos del arreglo
  const max_sum = arr.slice(-4).reduce((a, b) => a + b);

  // Imprimir las sumas minima y maxima
  console.log(min_sum, max_sum);
}

const testminiMaxSum = [1, 2, 3, 4, 5];
const testminiMaxSum2 = [1, 3, 5, 7, 9];

miniMaxSum(testminiMaxSum);
miniMaxSum(testminiMaxSum2);
