import { RenderButtonAdd } from "./ButtonAdd";
import { RenderButtonItemInCart } from "./ItemInCart";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

export const RenderButtonAddToCart = ({
  isLoading,
  cartLineID,
  handleClickButtonAdd,
  item,
}) => {
  const { cartInfo } = useSelector((state) => state.dataSlicePersisted);
  const listItemInCart = cartInfo?.details?.filter(
    (itemCart) => itemCart.productInfo.itemNo === item.itemNo,
  );

  const getTotalItemCartQty = (itemList) => {
    let quantity = 0;
    for(const item of (itemList)){
      quantity += item.quantity;
    }
    return quantity;
  }

  if ((listItemInCart || [])?.length<1)
    return (
      <RenderButtonAdd
        id={item.itemNo}
        isLoading={isLoading}
        handleClickButtonAdd={handleClickButtonAdd}
      />
    );
  else
    return (
      <RenderButtonItemInCart
        qtyInCart={getTotalItemCartQty(listItemInCart)}
        cartLineID={cartLineID}
        isLoading={isLoading}
        handleClickButtonAdd={handleClickButtonAdd}
      />
    );
};

RenderButtonAddToCart.propTypes = {
  isLoading: PropTypes.bool,
  cartLineID: PropTypes.string,
  handleClickButtonAdd: PropTypes.func,
  item: PropTypes.object,
};
