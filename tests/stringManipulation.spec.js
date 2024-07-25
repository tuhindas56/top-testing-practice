describe("String manipulation tests", () => {
  const { capitalize, reverseString } = require("./stringManipulation")
  const inputValidation = (callback) => {
    expect(() => callback()).toThrow(new Error("Enter a valid string!"))
    expect(() => callback(null)).toThrow(new Error("Enter a valid string!"))
    expect(() => callback(23)).toThrow(new Error("Enter a valid string!"))
    expect(() => callback({})).toThrow(new Error("Enter a valid string!"))
    expect(() => callback(false)).toThrow(new Error("Enter a valid string!"))
    expect(() => callback(true)).toThrow(new Error("Enter a valid string!"))
  }
  test("Should capitalize the first character of the string", () => {
    inputValidation(capitalize)
    expect(capitalize("alice")).toBe("Alice")
    expect(capitalize("23")).toBe("23")
  })
  test("Should return the reversed string", () => {
    inputValidation(reverseString)
    expect(reverseString("alice")).toBe("ecila")
    expect(reverseString("23")).toBe("32")
  })
})
