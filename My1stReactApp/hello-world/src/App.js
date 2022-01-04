import React from 'react';

import './App.css';
import Person from './components/Person';

function App() {          // a react component
  return (                // JSX code
    <div className="App">
      <h1>Hello</h1>
      <Person name="Rahim" age="59" > saying hi</Person>
      <Person name="Rabbi" age="25" > saying hi</Person>
      <Person name="Karim" age="54" > saying hi</Person>
    </div>
  );                      // JSX code
}                         // a react component end

export default App;       // exporting the component
