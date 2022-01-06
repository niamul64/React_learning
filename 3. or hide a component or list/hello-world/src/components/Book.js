import React from 'react';
import '../styleSheets/Book.css'

let Book = props => {

      return (
            <div className="Book">
                  <h1 onClick={props.delete} >Writer: {props.writerOfBook}, Book Name: {props.bookN} </h1>
                  <input type="text" onChange={props.inputName} value={props.bookN} />
            </div >
      );
}
export default Book;