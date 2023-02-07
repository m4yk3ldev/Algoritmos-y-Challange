function getCompleted(part, total) {
  const mcm = (a, b) => {
    let c
    while (b) {
      c = b
      b = a % b
      a = c
    }
    return a
  }

  part = part.split(':')
  total = total.split(':')
  let timePart = Number(part[0]) * 3600 + Number(part[1]) * 60 + Number(part[2])
  let timeTotal =
    Number(total[0]) * 3600 + Number(total[1]) * 60 + Number(total[2])
  const div = mcm(timePart, timeTotal)
  const partDiv = timePart / div
  const totalDiv = timeTotal / div
  return `${partDiv}/${totalDiv}`
}

module.exports = getCompleted
