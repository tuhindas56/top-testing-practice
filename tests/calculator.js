const calculator = {
  _inputValidator(a, b) {
    const invalidInputs = [undefined, null]
    if (invalidInputs.includes(a) || invalidInputs.includes(b) || typeof a !== "number" || typeof b !== "number") {
      throw new Error("This operation expects two numbers!")
    }
    return false
  },

  add(a, b) {
    return this._inputValidator(a, b) || a + b
  },

  subtract(a, b) {
    return this._inputValidator(a, b) || a - b
  },

  multiply(a, b) {
    return this._inputValidator(a, b) || a * b
  },

  divide(a, b) {
    return this._inputValidator(a, b) || +(a / b).toFixed(3)
  },
}
module.exports = calculator
