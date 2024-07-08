import { configureStore } from "@reduxjs/toolkit";
import sectionReducer from "./sectionState.ts";
import hoverState from "./hoverState.ts";

const store = configureStore({
  reducer: { sectionState: sectionReducer, hoverState: hoverState },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
