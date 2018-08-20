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
  if (line.length === 0) {
    return `The line is currently empty.`
  } else {
    return `The line is currently ${line}`

  }
}
