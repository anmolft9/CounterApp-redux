import React from "react";
import { useDispatch } from "react-redux";
import { decreaseNumber } from "../counterSlice";

export const Subtract = () => {
  const dispatch = useDispatch();
  return <button onClick={() => dispatch(decreaseNumber())}>-</button>;
};
