function takeANumber(currentLine, newPersonsName) {
  currentLine.push(newPersonsName)
  return `Welcome, ${newPersonsName}. You are number ${currentLine.length} in line.`
}
