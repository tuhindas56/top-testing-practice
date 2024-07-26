describe("Calculator tests", () => {
  const calculator = require("./calculator")
  const inputValidation = (operation) => {
    const invalidInputs = [[2], ["2", "3"], [2, "3"], [null, null], [undefined, undefined]]
    invalidInputs.forEach((input) => {
      expect(() => operation(input[0], input[1])).toThrow(new Error("This operation expects two numbers!"))
    })
  }

  describe("Input validation", () => {
    test("Addition throws errors for invalid inputs", () => inputValidation(calculator.add.bind(calculator)))
    test("Subtraction throws errors for invalid inputs", () => inputValidation(calculator.subtract.bind(calculator)))
    test("Multiplication throws errors for invalid inputs", () => inputValidation(calculator.multiply.bind(calculator)))
    test("Division throws errors for invalid inputs", () => inputValidation(calculator.divide.bind(calculator)))
  })

  describe("Addition tests", () => {
    test("Returns correct result for basic addition cases", () => {
      expect(calculator.add(2, 0)).toBe(2)
      expect(calculator.add(2, 3)).toBe(5)
      expect(calculator.add(-2, -3)).toBe(-5)
      expect(calculator.add(-2, 3)).toBe(1)
    })
  })

  describe("Subtraction tests", () => {
    test("Returns correct result for basic subtraction cases", () => {
      expect(calculator.subtract(2, 0)).toBe(2)
      expect(calculator.subtract(2, 3)).toBe(-1)
      expect(calculator.subtract(-2, -3)).toBe(1)
      expect(calculator.subtract(-2, 3)).toBe(-5)
    })
  })

  describe("Multiplication tests", () => {
    test("Returns correct result for basic multiplication cases", () => {
      expect(calculator.multiply(2, 0)).toBe(0)
      expect(calculator.multiply(2, 3)).toBe(6)
      expect(calculator.multiply(-2, -3)).toBe(6)
      expect(calculator.multiply(-2, 3)).toBe(-6)
    })
  })

  describe("Division tests", () => {
    test("Returns correct result for basic division cases", () => {
      expect(calculator.divide(4, 2)).toBe(2)
      expect(calculator.divide(-4, -2)).toBe(2)
      expect(calculator.divide(-4, 2)).toBe(-2)
    })
    test("Handles edge cases correctly", () => {
      expect(calculator.divide(2, 0)).toBe(Infinity)
      expect(calculator.divide(0, 0)).toBe(NaN)
      expect(calculator.divide(2, 7)).toBeCloseTo(0.286, 3)
    })
  })
})
