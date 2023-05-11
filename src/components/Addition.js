import React from "react";
import { useDispatch } from "react-redux";
import { increaseNumber } from "../counterSlice";

export const Addition = () => {
  const dispatch = useDispatch();
  return <button onClick={() => dispatch(increaseNumber())}>+</button>;
};
