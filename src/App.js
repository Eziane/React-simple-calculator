// src/App.js
import React from 'react';
import Calculator from './calculator';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Calculator</h1>
        <Calculator />
        <footer className="App-footer">
          <p>
            Made with ❤️ by Eziane Abderrahim.
            <a href="https://www.linkedin.com/in/abderrahim-eziane-354b15210/" target="_blank" rel="noopener noreferrer">
              Checkout my LinkedIn, let's get to know each other.
            </a>
          </p>
        </footer>
      </header>
    </div>
  );
}

export default App;
