const caesarCipher = (string, key) => {
  // Validate inputs
  if (!string || typeof string !== "string") {
    throw new TypeError("Enter a valid string!")
  }
  if (key > 26 || key < 0 || typeof key !== "number") {
    throw new RangeError("Key must be an integer in the range of 0 to 26")
  }
  if (key === 0 || key === 26) return string

  // Process the string
  return [...string]
    .map((character) => {
      if (/[^\d\w]/.test(character) || character === "_") return character // Directly return non-alphanumeric characters

      let characterCode = character.charCodeAt(0)

      // Shift the character code
      for (let i = 0; i < key; i += 1) {
        if (characterCode === 90) characterCode = 64 // Wrap around from 'Z' to 'A'
        if (characterCode === 122) characterCode = 96 // Wrap around from 'z' to 'a'
        characterCode += 1
      }

      return String.fromCharCode(characterCode) // Return shifted character
    })
    .join("")
}
module.exports = caesarCipher
