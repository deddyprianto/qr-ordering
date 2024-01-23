import { IconMinus, IconPlus } from "../../../assets/svgIcon"
import PropTypes from 'prop-types'

export const RenderButtonQty = ({
  item,
  updateBundleList,
  disableMinButton,
  disableMaxButton,
  itemCartMatchesQty,
}) => {
  const handleChangeQty = (isAddQuantity) => {
    let tmpItem = { ...item };
    let quantity = tmpItem.quantity || 0;
    if (isAddQuantity) quantity += 1;
    else quantity -= 1;
    if (quantity < 0) return;
    tmpItem.quantity = quantity;
    updateBundleList(tmpItem);
  };

  if (item.isSelected) {
    return (
      <div className="items-stretch self-center flex gap-1 my-auto">
        <button
          className={`${
            disableMinButton ? "bg-[#9D9D9D]" : "bg-pink-500"
          } justify-center items-center  flex aspect-square flex-col w-6 h-6 px-2 rounded-lg`}
          onClick={() => handleChangeQty(false)}
          disabled={disableMinButton || false}
        >
          <IconMinus />
        </button>
        <div className="text-gray-700 text-center text-base font-bold bg-zinc-300 w-12 h-6 rounded-lg">
          {item.quantity || itemCartMatchesQty?.quantity || 0}
        </div>
        <button
          className={`${
            disableMaxButton ? "bg-[#9D9D9D]" : "bg-pink-500"
          } justify-center items-center flex aspect-square flex-col w-6 h-6 px-2 rounded-lg`}
          onClick={() => handleChangeQty(true)}
          disabled={disableMaxButton || false}
        >
          <IconPlus />
        </button>
      </div>
    );
  } else {
    return null;
  }
};
RenderButtonQty.propTypes = {
  item: PropTypes.object,
  updateBundleList: PropTypes.func,
  disableMinButton: PropTypes.bool,
  disableMaxButton: PropTypes.bool,
  itemCartMatchesQty: PropTypes.object,
};