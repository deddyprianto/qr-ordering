import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: "",
  isOpenModalAuth: false,
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
  },
});

export const { setData, setIsOpenModalAuth } = dataSlice.actions;
export default dataSlice.reducer;
