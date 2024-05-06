import { createSlice } from "@reduxjs/toolkit";

const datePickerSlice = createSlice({
  name: "datepicker",
  initialState: new Date(),
  reducers: {
    setDate: (state, action) => {
      return action.payload;
    },
  },
});

export const { setDate } = datePickerSlice.actions;
export default datePickerSlice.reducer;
