import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
        {Array.from(new Array(5)).map((_, index) => (<div key={index}>123 <span>{count}</span> </div>))}
        <p onClick={() => setCount(count => count + 1)}>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      {Array.from(new Array(5)).map((_, i) => (<span key={i} >{count}</span>))}
    </div>
  );
}

export default App;
