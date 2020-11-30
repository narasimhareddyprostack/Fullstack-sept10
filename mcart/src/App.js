import React from "react";
import NavBar from "./NavBar";
import EventState from "./EventHandling/EventState";
import Login from "./HooksEx/Login";
function App() {
  return (
    <div>
      <NavBar />
      <Login />
    </div>
  );
}

export default App;
