import React, { Component } from 'react';

import './App.css';
import Person from './components/Person';
import Book from './components/Book';


function App() {          // a react component
  return (                // JSX code
    <div className="App">
      <h1>Hello</h1>
      <Person name="Rahim" age="59" > saying hi</Person>
      <Person name="Rabbi" age="25" > saying hi</Person>
      <Person name="Karim" age="54" > saying hi</Person>

      <Book writer="niamul" BookName="jata" />
      <Book writer="niamul2" BookName="jata" />
      <Book writer="niamul3" BookName="jata" />
      <Book writer="niamul4" BookName="jata" />
    </div>
  );                      // JSX code
}                         // a react component end

export default App;       // exporting the component


///////// class based APP

// class App extends Component {

//   render() {

//     return (                // JSX code
//       <div className="App">
//         <h1>Hello</h1>
//         <Person name="Rahim" age="60" > saying hi</Person>
//         <Person name="Rabbi" age="25" > saying hi</Person>
//         <Person name="Karim" age="54" > saying hi</Person>

//         <Book writer="writer" BookName="jata" />

//       </div>
//     );
//   }
// }
// export default App;
