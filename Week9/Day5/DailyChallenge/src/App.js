import React, { useState } from 'react';
import './App.css'; // Importing the CSS file

function Calculator() {
  // Initialize state variables
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [result, setResult] = useState('');

  // Handle input changes
  const handleNumber1Change = (event) => {
      setNumber1(event.target.value);
  };

  const handleNumber2Change = (event) => {
      setNumber2(event.target.value);
  };

  // Perform addition and set the result
  const addNumbers = () => {
      const num1 = parseFloat(number1);
      const num2 = parseFloat(number2);
      if (!isNaN(num1) && !isNaN(num2)) {
          setResult(num1 + num2);
      } else {
          setResult('Invalid input');
      }
  };

  return (
      <div className="calculator-container">
          <h1>Adding Two Numbers</h1>
          <div className="input-row">
              <label>
                  
                  <input
                      type="number"
                      value={number1}
                      onChange={handleNumber1Change}
                      className="input-field"
                  />
              </label>
              <label>
                 
                  <input
                      type="number"
                      value={number2}
                      onChange={handleNumber2Change}
                      className="input-field"
                  />
              </label>
          </div>
          <button onClick={addNumbers} className="button">
              Add Them
          </button>
          <div>
              <h2 className="result">{result}</h2>
          </div>
      </div>
  );
}

export default Calculator;