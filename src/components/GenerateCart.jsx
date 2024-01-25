import { apiCart } from "../services/Cart";

export  const addNewCart = async(setIsLoading, outletName, resetCartInfo, orderType)=> {
  try {
    let body = {
      "outletName": outletName,
      "orderType": orderType
    }
    const result = await apiCart("POST", "", body);
    if(result.resultCode == 200){
      resetCartInfo(result.data);
      return result.data?.uniqueID;
    }
    else throw(result.message);
  } catch (error) {
    setIsLoading(false);
    console.log(error);
  }
};