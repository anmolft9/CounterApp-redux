import React from "react";

export const SubtractButton = ({ setCounter }) => {
  return (
    <div>
      <button onClick={() => setCounter("-")}>-</button>
    </div>
  );
};
