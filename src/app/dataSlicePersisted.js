import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  accessToken: "",
  isSplashScreenShow: true,
};

const dataSlicePersisted = createSlice({
  name: "dataSlicePersisted",
  initialState,
  reducers: {
    setAccessToken: (state, action) => {
      state.accessToken = action.payload;
    },
    setShowSplashScreen: (state, action) => {
      state.isSplashScreenShow = action.payload;
    },
    setIsSearchItem: (state, action) => {
      state.isSearchItem = action.payload;
    },
    setSearchItemObj: (state, action) => {
      state.searchItemObj = action.payload;
    },
    setEnableSearchUsingScroll: (state, action) => {
      state.enableSearchUsingScroll = action.payload;
    },
  },
});

export const { 
  setAccessToken, 
  setShowSplashScreen, 
  setIsSearchItem, 
  setSearchItemObj,
  setEnableSearchUsingScroll } = dataSlicePersisted.actions;
export default dataSlicePersisted.reducer; // Changed 'dataSlicePersisted.reducer.default' to 'dataSlicePersisted.reducer'
