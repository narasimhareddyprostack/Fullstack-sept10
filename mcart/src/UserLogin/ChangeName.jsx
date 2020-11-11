import React, { Component } from "react";

class ChangeName extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "ShreeDevi",
    };
  }
  ChangeNameHandler = () => {
    this.setState({ name: "Kartina Kaif" });
  };
  render() {
    return (
      <div>
        <h1>Actress Name: {this.state.name}</h1>
        <button type="submit" onClick={this.ChangeNameHandler}>
          Change Name
        </button>
      </div>
    );
  }
}

export default ChangeName;
