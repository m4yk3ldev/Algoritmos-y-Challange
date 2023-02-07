/*
 * Complete the 'birthdayCakeCandles' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY candles as parameter.
 */

/**
 * @param {number[]} candles
 */
function birthdayCakeCandles(candles) {
  const max = Math.max(...candles);
  return candles.filter((n) => n === max).length;
}

const testbirthdayCakeCandles = [3, 2, 1, 3];

console.log(birthdayCakeCandles(testbirthdayCakeCandles));
