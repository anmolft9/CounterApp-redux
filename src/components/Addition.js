import React from "react";

export const Addition = ({ handleOnClick }) => {
  return <button onClick={() => handleOnClick("+")}>+</button>;
};
