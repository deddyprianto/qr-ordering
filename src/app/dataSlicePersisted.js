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
  },
});

export const { setAccessToken, setShowSplashScreen } =
  dataSlicePersisted.actions;
export default dataSlicePersisted.reducer; // Changed 'dataSlicePersisted.reducer.default' to 'dataSlicePersisted.reducer'
