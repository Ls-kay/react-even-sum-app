import { useState } from "react";
import "./App.css";

function App() {
  // STATE
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  // FUNCTION: Sum of even numbers
  const sumOfEvenNumbers = (arr) => {
    let sum = 0;

    for (let num of arr) {
      if (num % 2 === 0) {
        sum += num;
      }
    }

    return sum;
  };

  // HANDLE CLICK
  const handleCalculate = () => {
    if (!input) {
      setResult("Please enter numbers!");
      return;
    }

    const numbers = input.split(",").map((num) => parseInt(num.trim()));

    // Validate input
    if (numbers.some(isNaN)) {
      setResult("Invalid input! Use numbers only.");
      return;
    }

    const sum = sumOfEvenNumbers(numbers);
    setResult(`Sum of Even Numbers: ${sum}`);
  };

  return (
    <div className="container">
      <h1 className="title">Even Number Sum</h1>

      <input
        type="text"
        placeholder="Enter numbers (e.g. 1,2,3,4)"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="input"
      />

      <button onClick={handleCalculate} className="button">
        Calculate
      </button>

      {result && <p className="result">{result}</p>}
    </div>
  );
}

export default App;