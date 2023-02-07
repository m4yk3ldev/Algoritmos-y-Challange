//  https://www.hackerrank.com/challenges/js10-if-else/problem?isFullScreen=true
function getGrade(score) {
  let grade;
  // Write your code here
  if (0 <= score && score <= 5) {
    grade = "F";
  } else if (5 < score && score <= 10) {
    grade = "E";
  } else if (10 < score && score <= 15) {
    grade = "D";
  } else if (15 < score && score <= 20) {
    grade = "C";
  } else if (20 < score && score <= 25) {
    grade = "B";
  } else if (25 < score && score <= 30) {
    grade = "A";
  }
  return grade;
}

console.log(getGrade(11)); // -> F
