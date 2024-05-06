import { createSlice } from "@reduxjs/toolkit";

const datePickerSlice = createSlice({
  name: "datepicker",
  initialState: { newdate: new Date(), slot: [],isLoading: false  },
  reducers: {
    setDate: (state, action) => {
        state.newdate = action.payload;
    },
    setSlots: (state, action) => {
        
        state.slot = action.payload;
        
    },
    setIsLoading: (state, action) => {
        state.isLoading = action.payload;
      },
  },
});

export const { setDate,setSlots,setIsLoading  } = datePickerSlice.actions;
export default datePickerSlice.reducer;
