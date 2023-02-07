// https://www.hackerrank.com/challenges/js10-try-catch-and-finally/problem?isFullScreen=true
function reverseString(s) {
  try {
    console.log(s.split("").reverse().join(""));
  } catch (e) {
    console.log(e.message);
  } finally {
    if (typeof s !== "string") {
      console.log(s);
    }
  }
}

reverseString("1234");
reverseString(Number(1234));
