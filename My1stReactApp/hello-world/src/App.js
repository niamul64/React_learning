import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {          // a react component
  return (                // JSX code
    <div className="App">
      <h1>Hello</h1>
      <Person />          {/* // taking the 2nd compnent to pass */}
    </div>
  );                      // JSX code
}                         // a react component end

function Person() {          // a react component
  return (                // JSX code
    <div className="App">
      <h1>Hello2</h1>
    </div>
  );                      // JSX code
}


export default App;       // exporting the component
