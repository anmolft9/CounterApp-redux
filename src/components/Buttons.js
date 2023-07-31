import React from "react";
import { AddButton } from "./AddButton";
import { SubtractButton } from "./SubtractButton";

export const Buttons = ({ onBtnClick }) => {
  return (
    <div>
      <AddButton onBtnClick={onBtnClick} />
      <SubtractButton onBtnClick={onBtnClick} />
    </div>
  );
};
