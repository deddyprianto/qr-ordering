import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: "",
  isOpenModalAuth: true,
  isCartSummaryBlink: false,
  isSearchItem: false,
  theme: {
    success: "#1A883C",
    warning: "#CF3030",
    textColor: "#343A4A",
    disableColor: "#9D9D9D",
    discountedPrice: "#DDD",
    backgroundMain: "#F9F9F9",
    primary: "#00524C",
  },
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
    },
    setTheme: (state, action) => {
      state.theme = action.payload;
    },
  },
});

export const { setData, setIsOpenModalAuth, setIsSearchItem, setIsCartSummaryBlink } =
  dataSlice.actions;
export default dataSlice.reducer;
