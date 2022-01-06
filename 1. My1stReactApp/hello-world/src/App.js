import React, { Component } from 'react';
import './App.css';
import Person from './components/Person';
import Book from './components/Book';
/////// class based APP
class App extends Component {
  state = {
    books: [
      { bookName: "1984", writer: "George Orwell" },
      { bookName: "The Da Vinci Code", writer: "Dan Brown" },
      { bookName: "The", writer: "george orwell" }
    ],
    otherProperty: "i am other property"
  }

  changeState = (newBook) => { // function to change the state
    this.setState(
      {
        books: [
          { bookName: newBook, writer: "George Orwell" },
          { bookName: "The Da Vinci Code", writer: "Dan Brown" },
          { bookName: "change to", writer: "george orwell" }
        ]
      })
  }
  onChangeState = (event) => { // function to change the state
    this.setState(
      {
        books: [
          { bookName: event.target.value, writer: "George Orwell" },
          { bookName: "The Da Vinci Code", writer: "Dan Brown" },
          { bookName: "change to", writer: "george orwell" }
        ]
      })
  }

  render() {

    const style = {
      width: "300px",
      margin: "10px auto",
      padding: "10px",
      border: "1px solid",
      borderRadius: "5px",
      backgroundColor: "green",
      color: "black"
    }

    return (                // JSX code
      <div className="App">
        <h1 style={style} >Hello</h1>
        <button onClick={this.changeState.bind(this, "change from APP")}>
          Chang</button>
        <input type="text" onChange={this.onChangeState}
          value={this.state.books[0].bookName} />

        <Book
          writer={this.state.books[0].bookName}
          BookName={this.state.books[0].writer}
          inputText={this.onChangeState} ///////Passing onchange function reference
        />

        <Book
          writer={this.state.books[1].bookName}
          BookName={this.state.books[1].writer} />

        <Book writer={this.state.books[2].bookName}
          BookName={this.state.books[2].writer}
          change={() => this.changeState("change from component")} />
      </div>
    );
  }
}
export default App;




// function App() {          // a react component
//   return (                // JSX code
//     <div className="App">
//       <h1>Hello</h1>
//       <Person name="Rahim" age="59" > saying hi</Person>
//       <Person name="Rabbi" age="25" > saying hi</Person>
//       <Person name="Karim" age="54" > saying hi</Person>

//       <Book writer="niamul" BookName="jata" />
//       <Book writer="niamul2" BookName="jata" />
//       <Book writer="niamul3" BookName="jata" />
//       <Book writer="niamul4" BookName="jata" />
//     </div>
//   );                      // JSX code
// }                         // a react component end

// export default App;       // exporting the component