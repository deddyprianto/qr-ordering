import { useSelector } from "react-redux";
import { IconMinus, IconPlus } from "../../../assets/svgIcon"
import PropTypes from 'prop-types'

export const RenderButtonItemInCart = ({
  isLoading,
  qtyInCart,
  cartLineID,
  handleClickButtonAdd
}) => {
  const theme = useSelector((state) => state.dataSlicePersisted.theme);
  const handleClickChangeQty = (qty) => {
    handleClickButtonAdd(qty, cartLineID)
  }
  return (
    <div
      className="items-stretch flex gap-1 mt-2"
      style={{ filter: isLoading ? "blur(1px)" : "" }}
    >
      <button
        className="justify-center items-center flex flex-col px-3 py-1 rounded-lg"
        style={{ backgroundColor: theme.Color_Secondary }}
        onClick={() => handleClickChangeQty(qtyInCart - 1)}
      >
        <IconMinus width="16" />
      </button>
      <span className="text-gray-700 text-center text-base font-bold leading-6 whitespace-nowrap justify-center items-stretch bg-zinc-300 px-7 py-1 rounded-lg">
        {qtyInCart}
      </span>
      <button
        className="justify-center items-center flex flex-col px-3 py-1 rounded-lg"
        style={{ backgroundColor: theme.Color_Secondary }}
        onClick={() => handleClickChangeQty(qtyInCart + 1)}
      >
        <IconPlus width="16" />
      </button>
    </div>
  );
}
RenderButtonItemInCart.propTypes = {
  qtyInCart: PropTypes.number,
  cartLineID: PropTypes.string,
  isLoading: PropTypes.bool,
  handleClickButtonAdd: PropTypes.func
}