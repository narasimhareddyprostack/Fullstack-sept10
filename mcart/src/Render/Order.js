import React, { Component } from "react";

const imageOne =
  "https://via.placeholder.com/150/0000FF/808080 ?Text=Digital.com";

export class Order extends Component {
  constructor(props) {
    super(props);
    this.state = {
      male: "",
      female: "",
    };
  }
  changeEvent = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    if (this.state.male == "true") {
      var x = true;
    }
    return (
      <React.Fragment>
        <div className="container">
          <div className="card">
            <div className="card-header">
              <p className="h4">
                {" "}
                Condition Rendering {JSON.stringify(this.state)}
              </p>
            </div>
            <div className="card-body">
              <form>
                <div className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="customCheck1"
                    value={"true"}
                    name="male"
                    onChange={this.changeEvent}
                  />
                  <label className="custom-control-label" for="customCheck1">
                    Male
                  </label>
                </div>
                <div className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="customCheck2"
                    value={"true"}
                    name="female"
                    onChange={this.changeEvent}
                  />
                  <label className="custom-control-label" for="customCheck2">
                    Female
                  </label>
                </div>
              </form>
              <div className="container">
                {x ? (
                  <React.Fragment>
                    <div className="card">
                      <div className="card-header"> Male </div>
                      <div className="card-body">
                        <img src={imageOne} alt="" />
                      </div>
                    </div>
                  </React.Fragment>
                ) : null}

                {x ? (
                  <React.Fragment>
                    <div className="card">
                      <div className="card-header"> Male </div>
                      <div className="card-body">
                        <img src={imageOne} alt="" />
                      </div>
                    </div>
                  </React.Fragment>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Order;
