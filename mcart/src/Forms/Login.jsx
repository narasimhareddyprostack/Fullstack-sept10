import React, { Component } from "react";
class Login extends Component {
  state = {
    name: "",
    email: "",
    password: "",
  };
  inputHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  formHandler = (event) => {
    event.preventDefault();
    if (true) console.log(this.state);
  };
  //dispatch the action .
  // view to action ---> reducer - > store - > action
  render() {
    return (
      <React.Fragment>
        <div className="container mt-5 col-md-4">
          <pre>{JSON.stringify(this.state)}</pre>
          <form onSubmit={this.formHandler}>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Please Enter Name"
                value={this.state.name}
                onChange={this.inputHandler}
                name="name"
              />
              <input
                type="text"
                className="form-control"
                placeholder="Please Enter Email"
                value={this.state.email}
                onChange={this.inputHandler}
                name="email"
              />
              <input
                type="password"
                className="form-control"
                placeholder="Please password Email"
                value={this.state.password}
                onChange={this.inputHandler}
                name="password"
              />
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default Login;
