import React, { useState } from 'react';

export const Calculator = () => {
  const [expression, setExpression] = useState('');

  const handleButtonClick = (value) => {
    setExpression((prevExpression) => prevExpression + value);
  };

  const calculateResult = () => {
    try {
      const result = eval(expression); // This is not recommended for production, but fine for a simple example
      setExpression(result.toString());
    } catch (error) {
      setExpression('Error');
    }
  };

  const clearInput = () => {
    setExpression('');
  };

  return (
    <div className="calculator">
      <input
        type="text"
        value={expression}
        readOnly
        className="calculator-screen"
      />
      <div className="calculator-buttons">
        <button onClick={clearInput}>C</button>
        <button onClick={() => handleButtonClick('/')}>&divide;</button>
        <button onClick={() => handleButtonClick('*')}>x</button>
        <button onClick={() => handleButtonClick('7')}>7</button>
        <button onClick={() => handleButtonClick('8')}>8</button>
        <button onClick={() => handleButtonClick('9')}>9</button>
        <button onClick={() => handleButtonClick('-')}>-</button>
        <button onClick={() => handleButtonClick('4')}>4</button>
        <button onClick={() => handleButtonClick('5')}>5</button>
        <button onClick={() => handleButtonClick('6')}>6</button>
        <button onClick={() => handleButtonClick('+')}>+</button>
        <button onClick={() => handleButtonClick('1')}>1</button>
        <button onClick={() => handleButtonClick('2')}>2</button>
        <button onClick={() => handleButtonClick('3')}>3</button>
        <button onClick={calculateResult}>=</button>
        <button onClick={() => handleButtonClick('0')}>0</button>
      </div>
    </div>
  );
}