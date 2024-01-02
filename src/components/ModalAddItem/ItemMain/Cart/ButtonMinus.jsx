import { IconMinus } from "../../../../assets/svgIcon";
import PropTypes from "prop-types";

export const RenderButtonMinus = ({ item, updateCartItem }) => {
  const handleClickButton = () => {
    let body = {
      uniqueID: item.uniqueID,
      quantity: (item.quantity-1)
    };
    updateCartItem(body, item.productInfo?.itemName);
  };

  return(
    <button className="justify-center items-center bg-pink-500 flex aspect-[1.4444444444444444] flex-col px-2 py-1 rounded-lg"
      onClick={()=>handleClickButton()}
    >  
      <IconMinus width="14" height="30"/>
    </button>
  );
}

RenderButtonMinus.propTypes = {
  item: PropTypes.object,
  updateCartItem: PropTypes.func
}