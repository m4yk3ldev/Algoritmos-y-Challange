/**
 * @param {number} year
 * @param {string[]} holidays
 */
function countHours(year, holidays) {
  return (
    holidays
      .map((holiday) => {
        return new Date(`${holiday}/${year}`).getDay()
      })
      .filter((item) => item !== 0 && item !== 6).length * 2
  )
}

module.exports = countHours
