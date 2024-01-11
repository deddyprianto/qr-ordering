import { apiCart } from "../../../services/Cart";

export const apiCartAddItem = async (
  cartID, 
  body, 
  setOpenModal, 
  resetCartInfo,
  itemName,
  toast
) => {
  try {
    const result = await apiCart("POST", `${cartID}/additems`, body)//);
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