describe("String manipulation tests", () => {
  const { capitalize, reverseString } = require("./stringManipulation")

  describe("Input validation", () => {
    const validateInputs = (callback) => {
      const invalidInputs = [undefined, null, 23, {}, false, true]
      invalidInputs.forEach((input) => expect(() => callback(input)).toThrow(new Error("Enter a valid string!")))
      test("String capitalization throws errors for invalid inputs", () => validateInputs(capitalize))
      test("String reversal throws errors for invalid inputs", () => validateInputs(reverseString))
    }
  })

  test("Should capitalize the first character of the string", () => {
    expect(capitalize("alice")).toBe("Alice")
    expect(capitalize("23")).toBe("23")
  })

  test("Should return the reversed string", () => {
    expect(reverseString("alice")).toBe("ecila")
    expect(reverseString("23")).toBe("32")
  })
})
