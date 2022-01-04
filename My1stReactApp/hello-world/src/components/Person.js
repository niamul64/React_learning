import React from 'react';

function Person(obj) {          // a react component
      return (                // JSX code
            <div className="App">
                  <h1>I am {obj.name}, {obj.children} </h1>
            </div>
      );                      // JSX code
}

export default Person;  