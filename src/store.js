import { configureStore } from "@reduxjs/toolkit";
import Reducer from "./counterSlice";

const store = configureStore({
  reducer: {
    counter: Reducer,
  },
});

export default store;
