// https://www.hackerrank.com/challenges/js10-loops/problem?isFullScreen=true&h_r=next-challenge&h_v=zen

function vowelsAndConsonants(s) {
  let vocales = [];
  let consonants = [];
  for (const a of s) {
    if (a === "a" || a === "e" || a === "i" || a === "o" || a === "u") {
      vocales.push(a);
    } else {
      consonants.push(a);
    }
  }
  const newString = vocales.concat(consonants);
  for (const b of newString) {
    console.log(b);
  }
}
console.log(vowelsAndConsonants("javascriptloops"));
