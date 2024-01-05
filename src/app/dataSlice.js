import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: "",
  isOpenModalAuth: false,
  isCartSummaryBlink: false,
  isSearchItem: false
};

const dataSlice = createSlice({
  name: "dataSlice",
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
    setIsOpenModalAuth: (state, action) => {
      state.isOpenModalAuth = action.payload;
    },
    setIsSearchItem: (state, action) => {
      state.isSearchItem = action.payload;
    },
    setIsCartSummaryBlink: (state, action) => {
      state.isCartSummaryBlink = action.payload;
    }
  },
});

export const { 
  setData, 
  setIsOpenModalAuth,
  setIsSearchItem,
  setIsCartSummaryBlink 
} = dataSlice.actions;
export default dataSlice.reducer;
