import React from 'react';


let Book = props => {
      return (
            <div className="App">
                  <h1>Writer: {props.writer}, Book Name: {props.BookName} </h1>
            </div>
      );
}

export default Book; 