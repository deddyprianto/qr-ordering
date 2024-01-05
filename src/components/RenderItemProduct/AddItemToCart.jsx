import { setIsCartSummaryBlink } from "../../app/dataSlice";
import { setCartInfo } from "../../app/dataSlicePersisted";
import { apiCart } from "../../services/Cart";

export const addItemToCart = async(cartID, setIsLoading, item, dispatch, toast) => {
  setIsLoading(true);
  let body = {
    "itemNo": item.itemNo,
    "quantity": 1,
    "unitPrice": item.retailPrice,
    "remark": "",
    "referenceNo": "",
    "lineInfo": "",
    "attributes": [],
    "bundles": []
  };
  try {
    const result = await apiCart("POST", `${cartID}/additems`, body)//);

    if(result.resultCode == 200){
      dispatch(setCartInfo(result.data));
      dispatch(setIsCartSummaryBlink(true));
      toast.open(`${item.productInfo?.itemName || "Item"} has been added to cart`, 'success')
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