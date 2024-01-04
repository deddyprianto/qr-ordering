import { IconMinus, IconPlus } from "../../../assets/svgIcon"
import PropTypes from 'prop-types'

export const RenderButtonQty = ({
  item, 
  updateBundleList,
  disableMinButton,
  disableMaxButton
}) => {
  const handleChangeQty = (isAddQuantity) => {
    let tmpItem = {...item};
    let quantity = (tmpItem.quantity || 0);
    if(isAddQuantity) quantity += 1;
    else quantity -= 1;
    if(quantity<0) return
    tmpItem.quantity = quantity;
    updateBundleList(tmpItem);
  }

  if(!item.isSelected) return <></>
  else 
    return (
      <div className="items-stretch self-center flex gap-1 my-auto">
        <button className={`bg-${disableMinButton?"[#9D9D9D]":"pink-500"} justify-center items-center  flex aspect-square flex-col w-6 h-6 px-2 rounded-lg`}
          onClick={()=>handleChangeQty(false)}
          disabled={disableMinButton}
        >
          <IconMinus/>
        </button>
        <div className="text-gray-700 text-center text-base font-bold bg-zinc-300 w-12 h-6 rounded-lg">
          {item.quantity || 0}
        </div>
        <button className={`bg-${disableMaxButton?"[#9D9D9D]":"pink-500"} justify-center items-center flex aspect-square flex-col w-6 h-6 px-2 rounded-lg`}
          onClick={()=>handleChangeQty(true)}
          disabled={disableMaxButton}
        >
          <IconPlus/>
        </button>
      </div>
    )
}
RenderButtonQty.propTypes = {
  item: PropTypes.object,
  updateBundleList: PropTypes.func,
  disableMinButton: PropTypes.bool,
  disableMaxButton: PropTypes.bool,
}