import PropTypes from "prop-types";
import { RenderCartItemRow } from "./cartItem";
import { useDispatch, useSelector } from "react-redux";
import { setCartInfo } from "../../../../app/dataSlicePersisted";
import { apiCart } from "../../../../services/Cart";
import { useEdgeSnack } from "../../../EdgeSnack/utils/useEdgeSnack";

export const RenderItemCart = ({ 
  itemInCart,
  setIsLoading 
}) => {
  const dispatch = useDispatch();
  const toast = useEdgeSnack();
  const cartInfo = useSelector(
    (state) => state.dataSlicePersisted.cartInfo,
  );

  const updateCartItem = async(body, itemName) => {
    try {
      setIsLoading(true);
      let result;
      if(body.quantity == 0) 
        result = await apiCart("DELETE", `${cartInfo.uniqueID}/${body.uniqueID}`, {})
      else
        result = await apiCart("PATCH", `${cartInfo.uniqueID}/${body.uniqueID}/changeitemqty`, body)

      if(result.resultCode == 200){
        if(body.quantity == 0) 
          toast.open(`${itemName} removed from cart`, 'error')
        else
          toast.open(`${itemName} has been added to cart`, 'success')
        dispatch(setCartInfo(result.data));
      }
      else 
        toast.open(result.message, 'error')
      
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  if(itemInCart.length<1) return "";
  return( 
    <div className="mt-2">
      {itemInCart.map((item, idx)=>{
        return (
          <RenderCartItemRow 
            key={item.itemNo+"-"+idx}
            item={item} 
            updateCartItem={updateCartItem}
          />)
      })}
    </div>
  );
}

RenderItemCart.propTypes = {
  itemInCart: PropTypes.string,
  setIsLoading: PropTypes.func
}
