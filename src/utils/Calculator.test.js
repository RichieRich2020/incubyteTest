import Calculator from "./Calculator"

describe("Calculator Operations", () => {
  test("adds two numbers correctly", () => {
    const result = Calculator.add(5, 3)
    expect(result).toBe(8) // Check if 5 + 3 equals 8
  })

  test("subtracts two numbers correctly", () => {
    const result = Calculator.subtract(10, 4)
    expect(result).toBe(6) // Check if 10 - 4 equals 6
  })

  test("multiplies two numbers correctly", () => {
    const result = Calculator.multiply(3, 4)
    expect(result).toBe(12) // Check if 3 * 4 equals 12
  })

  test("handles negative numbers for addition", () => {
    const result = Calculator.add(-2, -3)
    expect(result).toBe(-5) // Check if -2 + -3 equals -5
  })
  test("returns 0 for adding zero", () => {
    const result = Calculator.add(0, 0)
    expect(result).toBe(0) // Check if 0 + 0 equals 0
  })
  test("returns correct result for multiplying by zero", () => {
    const result = Calculator.multiply(5, 0)
    expect(result).toBe(0) // Check if 5 * 0 equals 0
  })
})
