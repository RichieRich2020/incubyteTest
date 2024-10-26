import React, { useState } from "react"
import Calculator from "../utils/Calculator"

const CalculatorComponent = () => {
  const [num1, setNum1] = useState("")
  const [num2, setNum2] = useState("")
  const [result, setResult] = useState(null)

  const handleAdd = () => {
    setResult(Calculator.add(num1, num2))
  }

  const handleSubtract = () => {
    setResult(Calculator.subtract(num1, num2))
  }

  const handleMultiply = () => {
    setResult(Calculator.multiply(num1, num2))
  }

  return (
    <div
      style={{
        padding: "100px",
        height: "100vh",
        backgroundColor: "#f4e8ff",
      }}
    >
      <h2>Calculator</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "50px",
        }}
      >
        <input
          type="number"
          value={num1}
          onChange={(e) =>
            setNum1(e.target.value === "" ? "" : +e.target.value)
          }
          placeholder="Enter first number"
          style={inputStyle}
        />
        <input
          type="number"
          value={num2}
          onChange={(e) =>
            setNum2(e.target.value === "" ? "" : +e.target.value)
          }
          placeholder="Enter second number"
          style={inputStyle}
        />
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "40px",
          marginTop: "50px",
        }}
      >
        <div
          style={{
            margin: "10px 0",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <button style={buttonStyle} onClick={handleAdd}>
            Add
          </button>
          <button style={buttonStyle} onClick={handleSubtract}>
            Subtract
          </button>
          <button style={buttonStyle} onClick={handleMultiply}>
            Multiply
          </button>
        </div>
        <div>
          {" "}
          <h3>Result: {result !== null ? result : "No result yet"}</h3>
        </div>
      </div>
    </div>
  )
}

const inputStyle = {
  height: "40px",
  width: "150px",
  padding: "8px",
  fontSize: "16px",
  borderRadius: "4px",
  border: "1px solid #bf83ff",
  outline: "none",
}
const buttonStyle = {
  width: "100px",
  color: "#f4e8ff",
  backgroundColor: "#bf83ff",
  borderRadius: "10px",
  border: "none",
  height: "40px",
  margin: "10px ",
}
export default CalculatorComponent
