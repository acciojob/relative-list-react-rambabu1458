import React, { useState } from "react";

const SumCalculator = () => {
  const [inputValue, setInputValue] = useState("");
  const [numbers, setNumbers] = useState([]);
  const [sum, setSum] = useState(0);

  const handleAddNumber = () => {
    const parsed = parseInt(inputValue);
    if (!isNaN(parsed)) {
      setInputValue("");

      // Use functional update to access the latest numbers
      setNumbers((prevNumbers) => {
        const updatedNumbers = [...prevNumbers, parsed];

        // Async sum calculation
        setTimeout(() => {
          const total = updatedNumbers.reduce((acc, num) => acc + num, 0);
          setSum(total);
        }, 0);

        return updatedNumbers;
      });
    }
  };

  return (
    <div>
      <h2>Sum Calculator</h2>
      <input
        type="number"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter a number"
      />
      <button onClick={handleAddNumber}>Add</button>

      <h3>Numbers: {numbers.join(", ")}</h3>
      <h3>Sum: {sum}</h3>
    </div>
  );
};

export default SumCalculator;
