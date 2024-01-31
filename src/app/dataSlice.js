import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: "",
  isOpenModalAuth: true,
  isCartSummaryBlink: false,
  isSearchItem: false,
  menuSubGroup: [],
  paymentMethod: {},
  openModalGeneral: false,
  outletSetting: {},
  serviceCharge: [],
  isDataOrder: false,
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
    setMenuSubGroup: (state, action) => {
      state.menuSubGroup = action.payload;
    },
    setPaymentMethod: (state, action) => {
      state.paymentMethod = action.payload;
    },
    setOpenModalGeneral: (state, action) => {
      state.openModalGeneral = action.payload;
    },
    setOutletSetting: (state, action) => {
      state.outletSetting = action.payload;
    },
    setServiceCharge: (state, action) => {
      state.serviceCharge = action.payload;
    },
    setIsDataOrder: (state, action) => {
      state.isDataOrder = action.payload;
    },
  },
});

export const {
  setData,
  setIsOpenModalAuth,
  setIsSearchItem,
  setIsCartSummaryBlink,
  setMenuSubGroup,
  setPaymentMethod,
  setOpenModalGeneral,
  setOutletSetting,
  setServiceCharge,
  setIsDataOrder,
} = dataSlice.actions;
export default dataSlice.reducer;
