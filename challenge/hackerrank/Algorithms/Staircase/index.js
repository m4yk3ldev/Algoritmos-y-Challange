/*
 * Complete the 'staircase' function below.
 *
 * The function accepts INTEGER n as parameter.
 */

/**
 * @param {number} n
 */
function staircase(n) {
  for (let i = 1; i <= n; i++) {
    console.log(`${" ".repeat(n - i)}${"#".repeat(i)}`);
  }
}

staircase(6);
