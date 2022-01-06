import React, { Component } from 'react';
import './App.css';
import Person from './components/Person';
import Book from './components/Book';

class App extends Component {
  state = {
    books: [
      { id: 1, bookName: "1984", writer: "George Orwell" },
      { id: 2, bookName: "The Da Vinci Code", writer: "Dan Brown" },
      { id: 3, bookName: "The1", writer: "george orwell" },
      { id: 4, bookName: "The2", writer: "george orwell2" }
    ],
    toggle: true
  }

  deleteElement = (index) => {
    //const booksList = this.state.books.slice(); // arrow slice()
    //const booksList= this.state.books.map(item => item); // arrow func
    const booksList = [...this.state.books];

    booksList.splice(index, 1);

    this.setState({
      books: booksList
    });
  };

  changeName = (event, index) => { // function to change the state
    const book = { ...this.state.books[index] } // by this, we will get the specific single object
    book.bookName = event.target.value;         /// changing the value
    const booksList = [...this.state.books]; // geting the full obj 
    booksList[index] = book; // changing the one object
    this.setState({
      books: booksList
    })

  }
  renderFunc = () => {
    this.setState({
      toggle: !this.state.toggle // if true then set false, if false then set true
    })
  }

  render() {

    const style = {
      width: "300px",
      margin: "10px auto",
      padding: "10px",
      border: "1px solid",
      borderRadius: "5px",
    }


    let bookslist = null;

    if (this.state.toggle) {
      bookslist = this.state.books.map((book, index) => {
        return (
          <Book key={book.id} bookN={book.bookName} writerOfBook={book.writer}
            delete={() => this.deleteElement(index)} // passing the index with function reference
            inputName={(event) => this.changeName(event, index)}
          />
        );
      });

    }

    return (
      <div className="App">
        <button onClick={this.renderFunc}>Toggle</button>

        <h1 style={style} >Hello</h1>
        {bookslist}
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