function takeANumber(currentLine, newPersonsName) {
  currentLine.push(newPersonsName)
  let currentLinePlace = currentLine.length + 1
  return `Welcome, ${newPersonsName}. You are number ${currentLinePlace} in line.`
}
