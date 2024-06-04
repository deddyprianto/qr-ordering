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
  const lastCallTimestamp = localStorage.getItem("lastCallTimestamp");
  const currentDate = new Date().toDateString();

  if (outlet.toLowerCase() !== cartInfo?.outletName?.toLowerCase() 
      || lastCallTimestamp !== currentDate) {
    await apiCart("DELETE", cartInfo?.uniqueID);
    return dispatch(setCartInfo({}));
  }
  else if(!cartInfo?.uniqueID) return;

  try {
    const result = await apiCart("GET", cartInfo.uniqueID, {});
    if (result.resultCode === 200) {
      resetCartAndOrderType(dispatch, result.data);
    } else {
      throw result.message;
    }
  } catch (error) {
    dispatch(setCartInfo({}));
    console.log(error);
  }
};