import { useState } from "react";
import "./App.css";
import { Buttons } from "./components/Buttons";
import { Display } from "./components/Display";

function App() {
  const [counter, setCounter] = useState(0);

  const handleOnClick = (operator) => {
    operator === "-" ? setCounter(counter - 1) : setCounter(counter + 1);
  };
  return (
    <div className="App">
      <h1>Counter app</h1>

      <Buttons handleOnClick={handleOnClick} />
      <Display counter={counter} />
    </div>
  );
}

export default App;
