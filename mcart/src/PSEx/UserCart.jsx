import React, { Component } from "react";
class UserCart extends Component {
  xhandler = () => {
    this.props.method1();
  };
  render() {
    return (
      <div className="container">
        <h5> User Name:{this.props.name}</h5>
        <h6> Array : {this.props.size[0]}</h6>
        <h3>Address: {this.props.address.street}</h3>
        {/* <h5>Calling: {this.props.method1()}</h5> */}
        <h3>Address: {this.props.address.city}</h3>
        <button
          type="submit"
          onClick={this.xhandler}
          className="btn btn-danger"
        >
          Submit
        </button>
      </div>
    );
  }
}

export default UserCart;
