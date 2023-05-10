import React from "react";

export const Subtract = ({ handleOnClick }) => {
  return <button onClick={() => handleOnClick("-")}>-</button>;
};
