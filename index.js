function takeANumber(currentLine, newPersonsName) {
  currentLine.push(newPersonsName)
  return `Welcome, ${newPersonsName}. You are number ${currentLine.length} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return `There is nobody waiting to be served!`
  } else {
    let currentPerson = katzDeliLine[0]
    katzDeliLine.shift()
    return "Currently serving " + currentPerson + "."
  }
}

function currentLine(line) {
  let numberedArray = []
  if (line.length === 0) {
    return `The line is currently empty.`
  } else {
    for (var i = 0; i < line.length; i++) {
      numberedArray = `${i}. ${line[i]}`
    }
    return `The line is currently: ${numberedArray}`

  }
}
