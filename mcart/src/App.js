import React from "react";
import NavBar from "./NavBar";
import EventState from "./EventHandling/EventState";
import WishMessage from "./wish/wishMessage";
import { Provider } from "react-redux";
import store from "./redux/store";
function App() {
  return (
    <div>
      <Provider store={store}>
        <NavBar />
        <WishMessage />
      </Provider>
    </div>
  );
}

export default App;
