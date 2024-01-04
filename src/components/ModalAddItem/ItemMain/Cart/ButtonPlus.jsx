import { IconPlus } from "../../../../assets/svgIcon";
import PropTypes from "prop-types";

export const RenderButtonPlus = ({ item, updateCartItem }) => {
  const handleClickButton = () => {
    let body = {
      uniqueID: item.uniqueID,
      quantity: (item.quantity+1)
    };
    updateCartItem(body, item.productInfo?.itemName);
  };

  return(
    <button className={`bg-pink-500 justify-center items-center flex aspect-square flex-col w-6 h-6 px-2 rounded-lg`}
      onClick={()=>handleClickButton()}
    >  
      <IconPlus width="14" height="21"/>
    </button>
  );
}

RenderButtonPlus.propTypes = {
  item: PropTypes.object,
  updateCartItem: PropTypes.func
}