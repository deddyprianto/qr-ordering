import { setIsCartSummaryBlink } from "../../app/dataSlice";
import { setCartInfo } from "../../app/dataSlicePersisted";
import { apiCart } from "../../services/Cart";

export const addItemToCart = async(
  cartID, 
  setIsLoading, 
  item, 
  dispatch, 
  toast, 
  qty, 
  type, 
  lineID
) => {
  setIsLoading(true);
  let body = {
    "itemNo": item.itemNo,
    "quantity": qty,
    "unitPrice": item.retailPrice,
    "remark": "",
    "referenceNo": "",
    "lineInfo": "",
    "attributes": [],
    "bundles": []
  };
  try {
    const result = await apiService(type, cartID, lineID, body)

    if(result.resultCode == 200){
      dispatch(setCartInfo(result.data));
      dispatch(setIsCartSummaryBlink(true));
      toastSuccess(type, item.productInfo?.itemName);
    }
    else toast.open(result.message, 'error')
    setIsLoading(false);
    setTimeout(() => {
      dispatch(setIsCartSummaryBlink(false));
    }, 1000);
  } catch (error) {
    setIsLoading(false);
    console.log(error);
  }
};

const apiService = async(type, cartID, lineID, body) => {
  switch (type) {
    case "add":
      return await apiCart("POST", `${cartID}/additems`, body);
    case "update":
      return await apiCart("POST", `${cartID}/${lineID}`, body);
    case "delete":
      return await apiCart("DELETE", `${cartID}/${lineID}`, {});    
    default:
      break;
  }
}

const toastSuccess = (type, toast, itemName) => {
  switch (type) {
    case "add":
      toast.open(`${itemName || "Item"} has been added to cart`, 'success');
      break;
    case "update":
      toast.open(`${itemName || "Item"} has been updated in cart`, 'success');
      break;
    case "delete":
      toast.open(`${itemName || "Item"} has been removed from cart`, 'error');
      break;
    default:
      break;
  }
}