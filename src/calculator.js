// src/Calculator.js
import React, { useState } from 'react';
import './Calculator.css'; // Optional: for adding styles

const Calculator = () => {
    const [display, setDisplay] = useState('');

    const handleClick = (value) => {
        if (value === '=') {
            try {
                setDisplay(eval(display)); // Note: Using eval() can be dangerous and is generally discouraged.
            } catch (error) {
                setDisplay('Error');
            }
        } else if (value === 'C') {
            setDisplay('');
        } else {
            setDisplay(display + value);
        }
    };

    return (
        <div className="calculator">
            <div className="display">{display}</div>
            <div className="buttons">
                <button onClick={() => handleClick('1')}>1</button>
                <button onClick={() => handleClick('2')}>2</button>
                <button onClick={() => handleClick('3')}>3</button>
                <button onClick={() => handleClick('+')}>+</button>
                <button onClick={() => handleClick('4')}>4</button>
                <button onClick={() => handleClick('5')}>5</button>
                <button onClick={() => handleClick('6')}>6</button>
                <button onClick={() => handleClick('-')}>-</button>
                <button onClick={() => handleClick('7')}>7</button>
                <button onClick={() => handleClick('8')}>8</button>
                <button onClick={() => handleClick('9')}>9</button>
                <button onClick={() => handleClick('*')}>*</button>
                <button onClick={() => handleClick('C')}>C</button>
                <button onClick={() => handleClick('0')}>0</button>
                <button onClick={() => handleClick('=')}>=</button>
                <button onClick={() => handleClick('/')}>/</button>
            </div>
        </div>
    );
};

export default Calculator;
