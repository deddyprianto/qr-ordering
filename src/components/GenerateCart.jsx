import { apiCart } from "../services/Cart";

export const addNewCart = async (
  setIsLoading,
  outletName,
  resetCartInfo,
  orderType,
  tableNo,
  uniqueID,
) => {
  try {
    const checkUniqueIDcart = uniqueID || "";
    let body = {
      outletName: outletName,
      orderType: orderType,
      tableNo,
    };
    const result = await apiCart("POST", checkUniqueIDcart, body);
    if (result.resultCode == 200) {
      resetCartInfo(result.data);
      return result.data?.uniqueID;
    } else throw result.message;
  } catch (error) {
    setIsLoading(false);
    console.log("<ERROR></ERROR> =>", error);
  }
};