function solution(matrix) {
  let sum = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        // If a element is 0, all the elements under it should be ignored
        for (let k = i + 1; k < matrix.length; k++) {
          matrix[k][j] = 0;
        }
      } else {
        sum += matrix[i][j];
      }
    }
  }
  return sum;
}
