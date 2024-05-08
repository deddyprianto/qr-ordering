import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  accessToken: "",
  memberInfo: {},
  cartInfo: {},
  cartInfoLoading: false,
  outletName: "edge cafe",
  outletDetail: {},
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
  cartIdToShow: "",
  otpRequestInfo: {},
  insights: [],
  cartToListen: [],
  orderStatus: null,
  isDataOrder: false,
};

const dataSlicePersisted = createSlice({
  name: "dataSlicePersisted",
  initialState,
  reducers: {
    setAccessToken: (state, action) => {
      state.accessToken = action.payload;
      localStorage.setItem("accessToken", JSON.stringify(action.payload));
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
    setCartInfoLoading: (state, action) => {
      state.cartInfoLoading = action.payload;
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
    setOutletDetail: (state, action) => {
      state.outletDetail = action.payload;
    },
    setInsights: (state, action) => {
      state.insights = action.payload;
    },
    setCartToListen: (state, action) => {
      state.cartToListen = action.payload;
    },
    updateCartToListen: (state, action) => {
      let cartToListen = JSON.parse(JSON.stringify(state.cartToListen || []));
      let newObj = action.payload;
      let found = false;

      const newCartToListen = cartToListen.map((item) => {
        if (item.cartID === newObj.cartID) {
          found = true;
          return { ...item, status: newObj.status };
        } else {
          return item;
        }
      });
      if (!found) {
        newCartToListen.push(newObj);
      }
      state.cartToListen = newCartToListen;
    },
    setOrderStatus: (state, action) => {
      state.orderStatus = action.payload;
    },
    setIsDataOrder: (state, action) => {
      state.isDataOrder = action.payload;
    },
  },
});

export const {
  setCartInfoLoading,
  setIsDataOrder,
  setOrderStatus,
  setAccessToken,
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
  setOutletDetail,
  setInsights,
  setCartToListen,
  updateCartToListen,
} = dataSlicePersisted.actions;
export default dataSlicePersisted.reducer; // Changed 'dataSlicePersisted.reducer.default' to 'dataSlicePersisted.reducer'
