const inputValidator = (string) => {
  if (!string || typeof string !== "string") {
    throw new Error("Enter a valid string!")
  }
  return false
}
const capitalize = (string) => inputValidator(string) || string.charAt(0).toUpperCase() + string.substring(1)
const reverseString = (string) => inputValidator(string) || [...string].reverse().join("")
module.exports = { capitalize, reverseString }
