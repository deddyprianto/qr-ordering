import { RenderButtonAdd } from "./ButtonAdd";
import { RenderButtonItemInCart } from "./ItemInCart"
import PropTypes from 'prop-types';

export const RenderButtonAddToCart = ({ 
  isLoading,
  qtyInCart,
  cartLineID,
  handleClickButtonAdd
}) => {
  if(qtyInCart==0) 
    return (
      <RenderButtonAdd
        isLoading={isLoading}
        handleClickButtonAdd={handleClickButtonAdd}
      />
    )
  else 
    return (
      <RenderButtonItemInCart 
        qtyInCart={qtyInCart}
        cartLineID={cartLineID}
        isLoading={isLoading}
        handleClickButtonAdd={handleClickButtonAdd}
      />
    ) 
}
RenderButtonAddToCart.propTypes = {
  isLoading: PropTypes.bool,
  qtyInCart: PropTypes.number,
  cartLineID: PropTypes.string,
  handleClickButtonAdd: PropTypes.func,
}