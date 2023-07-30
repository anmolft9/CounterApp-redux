import "./App.css";
import { useState } from "react";
import { Display } from "./components/Display";
import { Buttons } from "./components/Buttons";

function App() {
  const [counter, setCounter] = useState(0);
  const onBtnClick = (op) => {
    op === "+" ? setCounter(counter + 1) : setCounter(counter - 1);
  };
  return (
    <div className="App">
      <Buttons setCounter={onBtnClick} />
      {/* <button onClick={() => setCounter(counter - 1)}>-</button> */}
      <Display counter={counter} />
      {/* <button onClick={() => setCounter(counter + 1)}>+</button> */}
    </div>
  );
}

export default App;
