import React, { useState } from 'react';
import './App.css'; // Import your CSS styles

function App() {
  const [inches, setInches] = useState('');
  const [result, setResult] = useState('');

  const calcMeters = (event) => {
    event.preventDefault();

    const calculatedMeters = parseFloat(inches) * 0.0254;

    setResult(`${inches} Inches = ${calculatedMeters.toFixed(2)} `);
  };

  return (
    <div className="all">
      <center>
        <h1>Inch-To-Meter Converter</h1>
      </center>
      <form className="container" onSubmit={calcMeters}>
        <label htmlFor="inches">Number of inches:</label>
        <input
          type="number"
          id="inches"
          name="inches"
          placeholder="Enter number of inches here..."
          required
          value={inches}
          onChange={(e) => setInches(e.target.value)}
        />
        <input type="submit" value="Calculate" className="submit" />
        <div className="meters">{result}Meters</div>
      </form>
    </div>
  );
}

export default App;
