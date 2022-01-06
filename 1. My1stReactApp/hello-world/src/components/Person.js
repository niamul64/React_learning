import React, { Component } from 'react';

class Person extends Component {
      constructor(props) { // need to use props
            super(props);
      }
      render() {
            console.log(this.props);
            return (
                  <div className="App">
                        <h1>I am {this.props.name}, {this.props.children} </h1>
                  </div>
            );

      }
}
export default Person;


