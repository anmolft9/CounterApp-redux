import React from "react";
import { AddButton } from "./AddButton";
import { SubtractButton } from "./SubtractButton";

export const Buttons = ({ setCounter }) => {
  return (
    <div>
      <AddButton setCounter={setCounter} />
      <SubtractButton setCounter={setCounter} />
    </div>
  );
};
