import { setCartInfo } from "../../../app/dataSlicePersisted";
import { apiCart } from "../../../services/Cart";

export  const addNewCart = async(setIsLoading, dispatch, outletName)=> {
  try {
    let body = {
      "outletName": outletName
    }
    const result = await apiCart("POST", "", body);
    if(result.resultCode == 200){
      console.log(result)
      dispatch(setCartInfo(result.data));
      return result.data?.uniqueID
    }
    else throw(result.message);
  } catch (error) {
    setIsLoading(false);
    console.log(error);
  }
};