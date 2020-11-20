import React, { Component } from "react";
class EventState extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: " Hello",
    };
    this.continueEx = this.continueEx.bind(this);
  }

  addCart = () => {
    //this.state.value = "Product Added to Cart Successfully";
    //console.log(this);
    this.setState({
      value: "Product Added to Cart Successfully",
    });
  };
  continueEx() {
    console.log(this);
    this.setState({
      name: "ShreeDevi",
    });
  }
  totalValue() {
    //logic
    console.log(this.props.x);
    this.setState({
      value: this.props.x,
    });
  }
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="card">
            <div className="card-header">
              <h4> Event Handling</h4>
            </div>
            <div className="card-body">
              <h4> {this.state.value}</h4>
              <button
                type="submit"
                className="btn btn-primary mr-5"
                onClick={this.addCart}
              >
                Add Cart
              </button>
              <button
                type="submit"
                className="btn btn-primary mr-5"
                onClick={this.continueEx}
              >
                Contiue
              </button>

              <button
                type="submit"
                className="btn btn-success mr-5"
                onClick={() => {
                  this.totalValue();
                }}
              >
                Total - 500USD
              </button>
              <button
                type="submit"
                className="btn btn-secondary mr-5"
                onClick={() => this.totalValue("100USD")}
              >
                Total - 1000USD
              </button>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default EventState;
