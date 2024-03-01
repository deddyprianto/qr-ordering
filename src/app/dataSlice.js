import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSplashScreenShow: true,
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
  moveSelected: false,
  hasSubGroup: false,
  tableNo: "",
  validUntil: "",
  isValidUrl: false,
  groupCollecting: [],
  saveRefNoGroup: ''
};

const dataSlice = createSlice({
  name: "dataSlice",
  initialState,
  reducers: {
    setGroupCollecting: (state, action) => {
      state.groupCollecting = action.payload;
    },
    setSaveRefNoGroup: (state, action) => {
      state.saveRefNoGroup = action.payload;
    },
    setShowSplashScreen: (state, action) => {
      state.isSplashScreenShow = action.payload;
    },
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
    setAutoMoveSelected: (state, action) => {
      state.moveSelected = action.payload;
    },
    setHasSubGroup: (state, action) => {
      state.hasSubGroup = action.payload;
    },
    setTableNo: (state, action) => {
      state.tableNo = action.payload;
    },
    setValidUntil: (state, action) => {
      state.validUntil = action.payload;
    },
    setIsValidUrl: (state, action) => {
      state.isValidUrl = action.payload;
    },
  },
});

export const {
  setSaveRefNoGroup,
  setGroupCollecting,
  setShowSplashScreen,
  setHasSubGroup,
  setAutoMoveSelected,
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
  setTableNo,
  setValidUntil,
  setIsValidUrl,
} = dataSlice.actions;
export default dataSlice.reducer;
