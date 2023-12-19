import { combineReducers } from "@reduxjs/toolkit";

import dataSlicePersisted from "./dataSlicePersisted";
import dataSlice from "./dataSlice";

const rootReducer = combineReducers({
  dataSlicePersisted,
  dataSlice,
});

export default rootReducer;
