import { apiCart } from "../../../services/Cart";

export const apiCartAddItem = async (
  cartID, 
  body, 
  setIsLoading, 
  setOpenModal, 
  resetCartInfo,
  itemName,
  toast
) => {
  setIsLoading(true);
  try {
    const result = await apiCart("POST", `${cartID}/additems`, body)//);
    if(result.resultCode == 200){
      setOpenModal(false);
      resetCartInfo(result.data);
      toast.open(`${itemName} has been added to cart`, 'success')
    }
    else toast.open(result.message, 'success')
    setIsLoading(false);
  } catch (error) {
    setIsLoading(false);
    console.log(error);
  }
}