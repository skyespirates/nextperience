import { combineReducers } from "@reduxjs/toolkit";
import sidebarReducer from "./slices/sidebarSlice";
const RootReducer = combineReducers({
  sidebar: sidebarReducer,
});

export default RootReducer;
