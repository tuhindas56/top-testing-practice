const analyzeArray = (array) => {
  if (!Array.isArray(array) || !array.length || array.some((value) => typeof value !== "number")) {
    throw new TypeError("Function expects an array of numbers!")
  }
  return {
    average: array.reduce((average, current) => average + current, 0) / array.length,
    min: Math.min(...array),
    max: Math.max(...array),
    length: array.length,
  }
}

module.exports = analyzeArray
