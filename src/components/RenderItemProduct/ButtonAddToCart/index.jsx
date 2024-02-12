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
  const isQtyExist = cartInfo?.details?.find(
    (itemCart) => itemCart.productInfo.itemNo === item.itemNo,
  );


  if (!isQtyExist)
    return (
      <RenderButtonAdd
        isLoading={isLoading}
        handleClickButtonAdd={handleClickButtonAdd}
      />
    );
  else
    return (
      <RenderButtonItemInCart
        qtyInCart={isQtyExist.quantity}
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
