import { configureStore } from "@reduxjs/toolkit";
import datepickSlice from "./datepickSlice";
const store = configureStore({
  reducer: {
    datepick: datepickSlice,
  },
});

export default store;
