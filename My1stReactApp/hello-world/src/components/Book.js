import React from 'react';
import '../styleSheets/Book.css'

let Book = props => {
      return (
            <div className="Book">
                  <h1 onClick={props.change} >Writer: {props.writer}, Book Name: {props.BookName} </h1>
                  <input type="text" onChange={props.inputText} value={props.writer} />
            </div >
      );
}

export default Book; 