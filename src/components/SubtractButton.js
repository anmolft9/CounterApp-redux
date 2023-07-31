import React from "react";
import { useDispatch } from "react-redux";
import { decreaseCounter } from "../counterSlice";

export const SubtractButton = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(decreaseCounter())}>-</button>
    </div>
  );
};
