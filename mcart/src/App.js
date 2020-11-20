import React from "react";
import NavBar from "./NavBar";
import EventState from "./EventHandling/EventState";
import Pstate from "./EventHandling/PState";
function App() {
  return (
    <div>
      <NavBar />
      <Pstate />
    </div>
  );
}

export default App;
