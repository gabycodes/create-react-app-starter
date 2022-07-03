import React from "react";
import logo from "./logo.svg";
import Rover from "./classes/Rover";
import "./App.css";

function App() {
  const rover = new Rover({});
  rover.move(
    "RMMLMMMMMMMMMMMMMMMMMMMMMMRMMMMMMMMMMMMMMMMMMMMMMMLLMMMMMMMMMMMMMMMMMMMMMMMMM"
  );

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Tech Challenge Starter ✨</p>
      </header>
    </div>
  );
}

export default App;
