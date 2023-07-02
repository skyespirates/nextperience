import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "./slices/sidebarSlice";

const store = configureStore({
  reducer: sidebarReducer,
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
