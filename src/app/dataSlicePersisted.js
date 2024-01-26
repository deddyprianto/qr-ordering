import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  accessToken: "",
  isSplashScreenShow: true,
  memberInfo: {},
  cartInfo: {},
  outletName: "edge cafe",
  selectedItemProds: [],
  orderType: "",
  theme: {
    Color_Selected: "#343A4A",
    Color_Unselected: "#9D9D9D",
    Color_Accent: "#DDD",
    Color_Tertiary: "#F9F9F9",
    Color_Primary: "#00524C",
    Color_Secondary: "#FF4782",
  },
  cartIdToShow: {}
};

const dataSlicePersisted = createSlice({
  name: "dataSlicePersisted",
  initialState,
  reducers: {
    setAccessToken: (state, action) => {
      state.accessToken = action.payload;
      localStorage.setItem("accessToken", JSON.stringify(action.payload));
    },
    setShowSplashScreen: (state, action) => {
      state.isSplashScreenShow = action.payload;
    },
    setSearchItemObj: (state, action) => {
      state.searchItemObj = action.payload;
    },
    setEnableSearchUsingScroll: (state, action) => {
      state.enableSearchUsingScroll = action.payload;
    },
    setOtpRequestInfo: (state, action) => {
      state.otpRequestInfo = action.payload;
    },
    setMemberInfo: (state, action) => {
      state.memberInfo = action.payload;
    },
    setCartInfo: (state, action) => {
      state.cartInfo = action.payload;
    },
    setOutletName: (state, action) => {
      state.outletName = action.payload;
    },
    setSelectedItemProds: (state, action) => {
      state.selectedItemProds = action.payload;
    },
    setOrderType: (state, action) => {
      state.orderType = action.payload;
    },
    setTheme: (state, action) => {
      state.theme = action.payload;
    },
    setCartIdToShow: (state, action) => {
      state.cartIdToShow = action.payload;
    },
  },
});

export const {
  setAccessToken,
  setShowSplashScreen,
  setSearchItemObj,
  setEnableSearchUsingScroll,
  setOtpRequestInfo,
  setMemberInfo,
  setCartInfo,
  setOutletName,
  setOrderType,
  setSelectedItemProds,
  setTheme,
  setCartIdToShow,
} = dataSlicePersisted.actions;
export default dataSlicePersisted.reducer; // Changed 'dataSlicePersisted.reducer.default' to 'dataSlicePersisted.reducer'
