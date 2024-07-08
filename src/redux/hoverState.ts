import { createSlice } from "@reduxjs/toolkit";

export const hoverState = createSlice({
  name: "hoverState",
  initialState: {
    value: false,
  },
  reducers: {
    setFalse: (state) => {
      state.value = false;
    },
    setTrue: (state) => {
      state.value = true;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setFalse, setTrue } = hoverState.actions;

export default hoverState.reducer;
