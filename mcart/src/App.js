import React from "react";
import NavBar from "./NavBar";
import EventState from "./EventHandling/EventState";
import Order from "./Render/Order";
function App() {
  return (
    <div>
      <NavBar />
      <Order />
    </div>
  );
}

export default App;
