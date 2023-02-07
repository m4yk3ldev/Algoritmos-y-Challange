// https://www.hackerrank.com/challenges/js10-let-and-const/problem?isFullScreen=true

function main() {
  // Write your code here. Read input using 'readLine()' and print output using 'console.log()'.
  const PI = Math.PI;
  let r = readLine();
  // Print the area of the circle:
  console.log(PI * Math.pow(Number(r), 2));
  // Print the perimeter of the circle:
  console.log(2 * PI * Number(r));
}
