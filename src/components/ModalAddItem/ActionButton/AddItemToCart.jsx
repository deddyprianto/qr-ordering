import { apiCart } from "../../../services/Cart";

export const apiCartAddItem = async (cartID, body, setIsLoading, setOpenModal) => {
  setIsLoading(true);
  try {
    const result = await apiCart("POST", `${cartID}/additems`, body)//);
    if(result.resultCode == 200){
      setOpenModal(false);
    }
    // else setSearchItemList([]);
    setIsLoading(false);
  } catch (error) {
    setIsLoading(false);
    console.log(error);
  }
}