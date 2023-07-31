import React from "react";
import { useDispatch } from "react-redux";
import { increaseCounter } from "../counterSlice";

export const AddButton = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(increaseCounter())}>+</button>
    </div>
  );
};
