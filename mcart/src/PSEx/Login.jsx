import React from "react";
import UserCart from "./UserCart";
class Login extends React.Component {
  state = {
    name: "Ramesh",
    size: [38, 40, 42],
    address: {
      houseNo: "#44",
      street: "Marathahalli",
      city: "Bangalore",
    },
    userLogin: () => {
      this.setState({ name: "Mahesh", address:{
        city:'Chennai'
      } });
    },
  };
  render() {
    return (
      <div>
        <UserCart
          name={this.state.name}
          size={this.state.size}
          address={this.state.address}
          method1={this.state.userLogin}
        />
      </div>
    );
  }
}
export default Login;
