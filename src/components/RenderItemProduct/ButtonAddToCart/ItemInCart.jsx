import { useSelector } from "react-redux";
import { IconMinus, IconPlus } from "../../../assets/svgIcon"
import PropTypes from 'prop-types'
import { useEffect, useState } from "react";

export const RenderButtonItemInCart = ({
  isLoading,
  qtyInCart,
  cartLineID,
  handleClickButtonAdd,
  id,
}) => {
  const [qty, setQty] = useState();
  useEffect(() => {
    setQty(qtyInCart);
  }, [qtyInCart]);
  const { theme, outletDetail } = useSelector(
    (state) => state.dataSlicePersisted,
  );
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
      className="grid grid-cols-3 gap-1"
      style={{
        filter: isLoading ? "blur(1px)" : "",
        display: outletDetail?.qrOrderingAvailability === "Hidden" && "none",
      }}
    >
      <button
        id="button-decreaseQuantity"
        data-id={id}
        className="justify-center items-center flex flex-col py-1 rounded-lg"
        style={{ backgroundColor: theme.Color_Secondary }}
        onClick={decreaseQuantity}
      >
        <IconMinus width="16" />
      </button>
      <span
        id="quantity"
        className="text-gray-700 text-center text-base font-bold leading-6 whitespace-nowrap justify-center items-stretch bg-zinc-300 py-1 rounded-lg"
      >
        {qty}
      </span>
      <button
        id="button-increaseQuantity"
        data-id={id}
        className="justify-center items-center flex flex-col py-1 rounded-lg"
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
  handleClickButtonAdd: PropTypes.func,
  id: PropTypes.string,
};