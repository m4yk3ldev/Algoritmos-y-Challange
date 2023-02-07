// https://www.hackerrank.com/challenges/js10-template-literals/problem?isFullScreen=true
function sides(literals, ...expressions) {
  const [area, perimeter] = expressions;

  let s1 = (perimeter + Math.sqrt(perimeter * perimeter - 16 * area)) / 4;
  let s2 = (perimeter - Math.sqrt(perimeter * perimeter - 16 * area)) / 4;

  return [s1, s2].sort();
}

const testLiterals = ["The area is: ", ".\nThe perimeter is: ", "."];
const testExpression = [140, 48];

console.log(sides(testLiterals, ...testExpression));
