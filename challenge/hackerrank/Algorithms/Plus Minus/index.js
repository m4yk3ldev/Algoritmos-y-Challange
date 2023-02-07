/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

/**
 * @param {number[]} arr
 */
function plusMinus(arr) {
  let pos = 0;
  let neg = 0;
  let zero = 0;
  let length = arr.length;

  arr.map((value) => {
    if (value > 0) {
      pos += 1;
    } else if (value < 0) {
      neg += 1;
    } else {
      zero += 1;
    }
  });

  console.log(Number(pos / length).toPrecision(6));
  console.log(Number(neg / length).toPrecision(6));
  console.log(Number(zero / length).toPrecision(6));
}

const testplusMinus = [-4, 3, -9, 0, 4, 1];

plusMinus(testplusMinus);
