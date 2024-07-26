describe("Array analyzing tests", () => {
  const analyzeArray = require("./analyzeArray")

  describe("Input validation", () => {
    test("Non-numeric elements array should throw an error", () => {
      const invalidInputs = ["", null, undefined, {}, [], true, false]
      invalidInputs.forEach((input) => {
        expect(() => analyzeArray([input])).toThrow(new TypeError("Function expects an array of numbers!"))
      })
      expect(() => analyzeArray(invalidInputs)).toThrow(new TypeError("Function expects an array of numbers!"))
    })
  })

  test("Returns an object with average, min, max and length properties", () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
      average: 4,
      min: 1,
      max: 8,
      length: 6,
    })
  })

  test("Works with negative numbers", () => {
    expect(analyzeArray([-1, -8, -3, -4, -2, -6])).toEqual({
      average: -4,
      min: -8,
      max: -1,
      length: 6,
    })
  })

  test("Works with floating point numbers", () => {
    expect(analyzeArray([1.5, 8.2, 3.14, 4.8, -2.4, -6, 0])).toEqual({
      average: 1.32,
      min: -6,
      max: 8.2,
      length: 7,
    })
  })

  test("Works with a single number", () => {
    expect(analyzeArray([1])).toEqual({
      average: 1,
      min: 1,
      max: 1,
      length: 1,
    })
  })
})
