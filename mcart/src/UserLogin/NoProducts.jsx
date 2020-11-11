/* Step: 1 - Declare your property in State Object

    state = {
        counter : 1,
        name:'ShreeDevi'
    }

Step2: if you want update , your state Object Property 
               use this.setState() method. 
                   this.setState Method expecting Object as argument
                   this.setState(  {  })

                   this.setState({ counter: this.state.counter+1})
                   this.setState( { name:'Kareena'})
*/
import React, { Component } from "react";

class NoProducts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };
  }
  addMoreHandler = () => {
    this.setState({ counter: this.state.counter + 10 });
  };
  decHandler() {
    this.setState({ counter: this.state.counter - 10 });
  }
  render() {
    return (
      <div>
        <h1>No of Products: {this.state.counter}</h1>
        <button type="submit" onClick={this.addMoreHandler}>
          Add More .. 10
        </button>
        <button
          type="submit"
          onClick={() => {
            this.decHandler();
          }}
        >
          Delete More ..10
        </button>
      </div>
    );
  }
}

export default NoProducts;
