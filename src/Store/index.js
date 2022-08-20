import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../Components/Counter/CounterReducer";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
