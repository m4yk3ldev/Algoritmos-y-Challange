// https://www.hackerrank.com/challenges/grading/problem?isFullScreen=true

/*
 * Complete the 'gradingStudents' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY grades as parameter.
 */

/**
 * @param {number[]} grades
 */
function gradingStudents(grades) {
  return [...grades].map((grade) => {
    if (grade >= 38 && grade % 5 !== 0 && grade % 5 >= 3) {
      return Math.floor(grade + (5 - (grade % 5)));
    }
    return grade;
  });
}
