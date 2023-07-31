import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  counter: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increaseCounter: (state, payload) => {
      state.counter = state.counter + 1;
    },
    decreaseCounter: (state, payload) => {
      state.counter = state.counter - 1;
    },
  },
});

const { reducer, actions } = counterSlice;
export const { increaseCounter, decreaseCounter } = actions;

export default reducer;
