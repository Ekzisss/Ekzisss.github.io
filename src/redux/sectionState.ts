import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { Sections } from '../config/enums';

export const sectionState = createSlice({
  name: 'sectionState',
  initialState: {
    value: Sections.projects,
  },
  reducers: {
    change: (state, action: PayloadAction<Sections>) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { change } = sectionState.actions;

export default sectionState.reducer;
