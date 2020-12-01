import React, { useState } from "react";

let SimpleHook = () => {
  let [mobile, setMobile] = useState({ productID: 101, name: "Nokia" });
  let clickHandler = () => {
    setMobile({
      ...mobile,
      name: "Iphone",
    });
  };
  return (
    <div className="container mt-10">
      <h1>
        {" "}
        {mobile.name} {mobile.productID}
      </h1>
      <button className="btn btn-info" onClick={clickHandler}>
        Change Mobile
      </button>
    </div>
  );
};

export default SimpleHook;
