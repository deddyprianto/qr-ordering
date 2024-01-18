import { apiCart } from "../../../services/Cart";

export const apiCartAddItem = async (
  cartID, 
  body, 
  setOpenModal, 
  resetCartInfo,
  itemName,
  toast,
  lineID
) => {
  try {
    const result = await callAPI(cartID, lineID, body)//);
    if(result.resultCode == 200){
      setOpenModal(false);
      resetCartInfo(result.data);
      toast.open(`${itemName} has been added to cart`, 'success')
    }
    else toast.open(result.message, 'success')
  } catch (error) {
    console.log(error);
  }
}

const callAPI = async (cartID, lineID, body) => {
  if(lineID)
    return await apiCart("PUT", `${cartID}/${lineID}`, body[0]);
  else
    return await apiCart("POST", `${cartID}/additems`, body);
}