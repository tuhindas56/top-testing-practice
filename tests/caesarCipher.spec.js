describe("Caesar cipher tests", () => {
  const caesarCipher = require("./caesarCipher")

  describe("Input validation", () => {
    test("Should throw an error for invalid input string", () => {
      const invalidInputs = [undefined, null, 23, {}, false, true]
      invalidInputs.forEach((input) =>
        expect(() => caesarCipher(input, 26)).toThrow(new TypeError("Enter a valid string!"))
      )
    })

    test("Should throw an error for an invalid or out of bounds key", () => {
      const invalidKeys = [undefined, null, 27, -1, "abc", {}, false, true]
      invalidKeys.forEach((key) =>
        expect(() => caesarCipher("xyz", key)).toThrow(new RangeError("Key must be an integer in the range of 0 to 26"))
      )
    })
  })

  test("Shifts letters by a fixed number", () => {
    expect(caesarCipher("abcd", 4)).toBe("efgh")
  })

  test("Returns original string if key is 0 or 26", () => {
    const boundaryKeys = [0, 26]
    boundaryKeys.forEach((key) => expect(caesarCipher("abcd", key)).toBe("abcd"))
  })

  test("Handles wraparounds", () => {
    expect(caesarCipher("wxyz", 3)).toBe("zabc")
  })

  test("Preserves original letter case", () => {
    expect(caesarCipher("Abc", 3)).toBe("Def")
  })

  test("Preserves punctuation", () => {
    expect(caesarCipher("abC,d!", 4)).toBe("efG,h!")
  })

  test("Preserves whitespace", () => {
    expect(caesarCipher("abC d!", 4)).toBe("efG h!")
  })
})
