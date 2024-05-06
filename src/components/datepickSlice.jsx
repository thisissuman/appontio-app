import { createSlice } from "@reduxjs/toolkit";

const datePickerSlice = createSlice({
  name: "datepicker",
  initialState: { newdate: new Date(), slot: [] },
  reducers: {
    setDate: (state, action) => {
        state.newdate = action.payload;
    },
    setSlots: (state, action) => {
        
        state.slot = action.payload;
        
    },
  },
});

export const { setDate,setSlots  } = datePickerSlice.actions;
export default datePickerSlice.reducer;
