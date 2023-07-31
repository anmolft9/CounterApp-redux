import "./App.css";
import { useState } from "react";
import { Display } from "./components/Display";
import { Buttons } from "./components/Buttons";

function App() {
  return (
    <div className="App">
      <Buttons />
      {/* <button onClick={() => setCounter(counter - 1)}>-</button> */}
      <Display />
      {/* <button onClick={() => setCounter(counter + 1)}>+</button> */}
    </div>
  );
}

export default App;
