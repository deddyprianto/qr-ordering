import { useSelector } from "react-redux";
import { IconMinus, IconPlus } from "../../../assets/svgIcon"
import PropTypes from 'prop-types'
import { useState } from "react";

export const RenderButtonItemInCart = ({
  isLoading,
  qtyInCart,
  cartLineID,
  handleClickButtonAdd,
}) => {
  const [qty, setQty] = useState(qtyInCart);
  const theme = useSelector((state) => state.dataSlicePersisted.theme);
  const handleClickChangeQty = (newQuantity) => {
    handleClickButtonAdd(newQuantity, cartLineID);
  };

  const increaseQuantity = () => {
    setQty((prevQuantity) => {
      const newQuantity = prevQuantity + 1;
      handleClickChangeQty(newQuantity);
      return newQuantity;
    });
  };

  const decreaseQuantity = () => {
    setQty((prevQuantity) => {
      if (prevQuantity > 0) {
        const newQuantity = prevQuantity - 1;
        handleClickChangeQty(newQuantity);
        return newQuantity;
      }
      return prevQuantity;
    });
  };

  return (
    <div
      className="items-stretch flex gap-1 mt-2"
      style={{ filter: isLoading ? "blur(1px)" : "" }}
    >
      <button
        className="justify-center items-center flex flex-col px-3 py-1 rounded-lg"
        style={{ backgroundColor: theme.Color_Secondary }}
        onClick={decreaseQuantity}
      >
        <IconMinus width="16" />
      </button>
      <span className="text-gray-700 text-center text-base font-bold leading-6 whitespace-nowrap justify-center items-stretch bg-zinc-300 px-7 py-1 rounded-lg">
        {qty}
      </span>
      <button
        className="justify-center items-center flex flex-col px-3 py-1 rounded-lg"
        style={{ backgroundColor: theme.Color_Secondary }}
        onClick={increaseQuantity}
      >
        <IconPlus width="16" />
      </button>
    </div>
  );
};
RenderButtonItemInCart.propTypes = {
  qtyInCart: PropTypes.number,
  cartLineID: PropTypes.string,
  isLoading: PropTypes.bool,
  handleClickButtonAdd: PropTypes.func
}