import React, { useState } from "react";

let Login = () => {
  let [user, setUser] = useState({ userName: "", password: "" });
  let [paraText, setparaText] = useState(
    "Formik comes with battle-tested solutions for input validation, formatting, masking, arrays, and error handling. This means you spend less time writing form code and more time building your next big thing."
  );
  //   let userHandler = (e) => {
  //     setUser({ ...user, userName: e.target.value });
  //   };

  //   let passwordHandler = (e) => {
  //     setUser({ ...user, password: e.target.value });
  //   };
  let inputHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  let changeHandler = (e) => {
    setparaText("My Self Pooja");
  };
  return (
    <React.Fragment>
      <div className="container col-md-4">
        <pre> {JSON.stringify(user)}</pre>
        <div className="card">
          <div className="card-header">
            <p className="h4"> React Hooks Example - Login </p>
          </div>
          <div className="card-body">
            <form>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Usre Name"
                  value={user.userName}
                  onChange={inputHandler}
                  name="userName"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Password"
                  value={user.password}
                  onChange={inputHandler}
                  name="password"
                />
              </div>
              <button className="btn btn-success btn-sm">Submit</button>
            </form>
          </div>
        </div>

        <div className="card mt-7">
          <div className="card-header">
            <p className="h4"> React Hooks Example - Login </p>
          </div>
          <div className="card-body">
            <p>{paraText}</p>
            <button className="btn btn-success btn-sm" onClick={changeHandler}>
              Change Para
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Login;
