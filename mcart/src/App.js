import React from "react";
import NavBar from "./NavBar";
import EventState from "./EventHandling/EventState";
import WishMessage from "./wish/wishMessage";
import { Provider } from "react-redux";
import store from "./redux/store";
import SimpleHook from "./SimpleHook/SimpleHook";
function App() {
  return (
    <div>
      <Provider store={store}>
        <NavBar />
        <WishMessage />
        {/* <SimpleHook /> */}
      </Provider>
    </div>
  );
}

export default App;
