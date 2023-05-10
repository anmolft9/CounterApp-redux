import React from "react";
import { Addition } from "./Addition";
import { Subtract } from "./Subtract";

export const Buttons = ({ handleOnClick }) => {
  return (
    <>
      <Subtract handleOnClick={handleOnClick} />
      <Addition handleOnClick={handleOnClick} />
    </>
  );
};
