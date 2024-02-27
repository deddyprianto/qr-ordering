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
  if (!cartInfo?.uniqueID) return;
  if (outlet.toLowerCase() !== cartInfo?.outletName?.toLowerCase()) {
    await apiCart("DELETE", cartInfo?.uniqueID);
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
    console.log(error);
  }
};