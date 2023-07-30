import React from "react";

export const AddButton = ({ setCounter }) => {
  return (
    <div>
      <button onClick={() => setCounter("+")}>+</button>
    </div>
  );
};
