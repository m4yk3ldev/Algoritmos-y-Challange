// The days of the week are: "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
function getDayName(dateString) {
  const name = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  // Write your code here
  return name[new Date(dateString).getDay()];
}

console.log(getDayName("10/11/2009"));
console.log(getDayName("11/10/2010"));
