import React from "react";

class UserLogin extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 5,
    };
  }

  productHandler() {
    this.setState({ counter: this.state.counter + 1 });
  }
  render() {
    return (
      <div className="container m-5">
        <h1>No of Products:{this.state.counter}</h1>
        <button
          type="submit"
          onClick={() => {
            this.productHandler();
          }}
        >
          +
        </button>
      </div>
    );
  }
}
export default UserLogin;
