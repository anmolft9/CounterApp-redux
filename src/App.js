import { useState } from "react";
import "./App.css";
import { Buttons } from "./components/Buttons";
import { Display } from "./components/Display";

function App() {
  return (
    <div className="App">
      <h1>Counter app</h1>

      <Buttons />
      <Display />
    </div>
  );
}

export default App;
