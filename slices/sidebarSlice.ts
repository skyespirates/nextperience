import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isShow: true,
};

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    open: (state) => {
      state.isShow = true;
    },
    close: (state) => {
      state.isShow = false;
    },
  },
});

export const { open, close } = sidebarSlice.actions;

export default sidebarSlice.reducer;
