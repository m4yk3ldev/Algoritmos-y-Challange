function timeConversion(s) {
  let hour = s.slice(0, 2);
  let minutes = s.slice(2);

  if (hour == 12 && minutes.includes("AM")) {
    hour = "00";
  } else if (hour == 12 && minutes.includes("PM")) {
    hour = 12;
  } else if (hour != 12 && minutes.includes("PM")) {
    hour = parseInt(12 + Number(hour));
  }

  let dataTime = `${hour}${minutes}`;

  return dataTime.slice(0, 8);
}

function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

function findMedian(arr) {
  const sorted = Array.from(arr).sort((a, b) => a - b);
  const middle = Math.floor(sorted.length / 2);

  if (sorted.length % 2 === 0) {
    return (sorted[middle - 1] + sorted[middle]) / 2;
  }

  return sorted[middle];
}

//get unique

function lonelyinteger(arr) {
  let lonely = arr.filter(
    (item) => arr.indexOf(item) === arr.lastIndexOf(item)
  );

  return lonely;
}
