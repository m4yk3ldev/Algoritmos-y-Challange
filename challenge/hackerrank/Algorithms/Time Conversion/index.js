/*
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

/**
 * @param {string} s
 */
function timeConversion(s) {
  let [hour, min, secType] = s.split(":");
  const type = secType.slice(2, 4);
  const sec = secType.slice(0, 2);
  if (type.toLowerCase() === "pm" && hour !== "12") {
    hour = String(parseInt(hour) + 12);
  } else if (type.toLowerCase() === "am" && hour === "12") {
    hour = "00";
  }
  return `${hour}:${min}:${sec}`;
}

console.log(timeConversion("07:05:45PM"));
console.log(timeConversion("12:01:00am"));
