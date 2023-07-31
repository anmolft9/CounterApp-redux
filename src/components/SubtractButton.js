import React from "react";

export const SubtractButton = ({ onBtnClick }) => {
  return (
    <div>
      <button onClick={() => onBtnClick("-")}>-</button>
    </div>
  );
};
