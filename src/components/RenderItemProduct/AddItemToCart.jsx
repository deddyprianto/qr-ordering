import { setIsCartSummaryBlink } from "../../app/dataSlice";
import { setCartInfo } from "../../app/dataSlicePersisted";
import { apiCart } from "../../services/Cart";

export const addItemToCart = async(
  cartID, 
  item, 
  dispatch, 
  toast, 
  qty, 
  lineID,
  reMapProductAndCart
) => {
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
    let type = actionType(qty, lineID)
    const result = await apiService(type, cartID, lineID, body)

    if(result.resultCode == 200){
      dispatch(setCartInfo(result.data));
      dispatch(setIsCartSummaryBlink(true));
      toastSuccess(type, toast, item.itemName);
      reMapProductAndCart(result.data);
    }
    else toast.open(result.message, 'error')
    setTimeout(() => {
      dispatch(setIsCartSummaryBlink(false));
    }, 1000);
  } catch (error) {
    console.log(error);
  }
};

const actionType = (qty, lineID) => {
  if((lineID || "")=="")
    return "add";
  else if(qty<1)
    return "delete";
  else 
    return "update";
}

const apiService = async(type, cartID, lineID, body) => {
  switch (type) {
    case "add":
      return await apiCart("POST", `${cartID}/additems`, [body]);
    case "update":
      return await apiCart("PATCH", `${cartID}/${lineID}/changeitemqty`, {
        uniqueID: lineID,
        quantity: body.quantity
      });
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