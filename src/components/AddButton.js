import React from "react";

export const AddButton = ({ onBtnClick }) => {
  return (
    <div>
      <button onClick={() => onBtnClick("+")}>+</button>
    </div>
  );
};
