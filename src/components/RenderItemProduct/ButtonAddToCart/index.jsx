import { RenderButtonAdd } from "./ButtonAdd";
import { RenderButtonItemInCart } from "./ItemInCart"
import PropTypes from 'prop-types';

export const RenderButtonAddToCart = ({ 
  isLoading,
  qtyInCart,
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
        isLoading={isLoading}
        handleClickButtonAdd={handleClickButtonAdd}
      />
    ) 
}
RenderButtonAddToCart.propTypes = {
  isLoading: PropTypes.bool,
  qtyInCart: PropTypes.number,
  handleClickButtonAdd: PropTypes.func
}