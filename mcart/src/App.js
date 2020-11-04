import React from "react";
import Order from "./Order";

import Products from "./Product/Products";

class App extends React.Component {
  render() {
    return (
      <div>
        <Order />
        <Products />
      </div>
    );
  }
}
export default App;
