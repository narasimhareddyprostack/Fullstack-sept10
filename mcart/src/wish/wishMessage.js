import React from "react";

import { useSelector } from "react-redux";
import { messageKey } from "./../redux/wishMessage/wish-message.reducer";
let WishMessage = () => {
  // useSelector()
  //useDispath()

  let messageInfo = useSelector((state) => {
    return state.messageCard;
  });
  
  return (
    <React.Fragment>
      <div className="container mt-5">
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="card-header"> Redux Example</div>
              <div className="card-body">
                <h1> {messageInfo.message}</h1>
                <button className="btn btn-success btn-sm mr-5">
                  Good Morning
                </button>
                <button className="btn btn-danger btn-sm mr-5">
                  Good Night
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default WishMessage;
