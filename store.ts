import { configureStore } from "@reduxjs/toolkit";
import RootReducer from "./RootReducer";
const store = configureStore({
  reducer: RootReducer,
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
