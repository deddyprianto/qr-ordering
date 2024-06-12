import { setCartInfo, setOrderType } from "../../app/dataSlicePersisted";
import { apiCart } from "../../services/Cart";

const resetCartAndOrderType = (dispatch, data) => {
  if (data?.status != "PENDING") {
    dispatch(setCartInfo({}));
    dispatch(setOrderType(""));
  } else {
    dispatch(setCartInfo(data));
    dispatch(setOrderType(data?.orderType));
  }
};

export const fetchCartInfo = async (dispatch, outlet, cartInfo) => {
  const urlQuery = window.location.search;
  const queryParams = new URLSearchParams(urlQuery);
  const queryStr = queryParams.get("input");
  const decodeQueryStr = window.atob(queryStr);
  const decodedParams = new URLSearchParams(decodeQueryStr);
  const tableNo = decodedParams.get("tableNo");

  const lastCallTimestamp = localStorage.getItem("lastCallTimestamp");
  const currentDate = new Date().toDateString();

  const shouldDeleteCart =
    lastCallTimestamp !== currentDate ||
    (cartInfo?.outletName &&
      outlet.toLowerCase() !== cartInfo?.outletName?.toLowerCase()) ||
    (tableNo && tableNo !== cartInfo?.tableNo);

  if (shouldDeleteCart) {
    if (cartInfo?.uniqueID) {
      dispatch(setOrderType(""));
      await apiCart("DELETE", cartInfo?.uniqueID);
      console.log("DELETE SUCCESS");
    }
    return dispatch(setCartInfo({}));
  }

  try {
    const result = await apiCart("GET", cartInfo.uniqueID, {});
    if (result.resultCode === 200) {
      resetCartAndOrderType(dispatch, result.data);
    } else {
      throw result.message;
    }
  } catch (error) {
    dispatch(setOrderType(""));
    dispatch(setCartInfo({}));
    console.log(error);
  }
};