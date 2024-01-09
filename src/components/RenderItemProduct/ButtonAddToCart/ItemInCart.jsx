import { IconMinus, IconPlus } from "../../../assets/svgIcon"
import PropTypes from 'prop-types'

export const RenderButtonItemInCart = ({
  isLoading,
  qtyInCart,
  cartLineID,
  handleClickButtonAdd
}) => {
  const handleClickChangeQty = (qty) => {
    console.log(cartLineID)
    handleClickButtonAdd(qty, cartLineID)
  }
  return (
    <div className="items-stretch flex gap-1 mt-2"
      style={{filter: isLoading ? "blur(1px)" : "",}}
    >
      <div className="justify-center items-center bg-[#FF4782] flex flex-col px-3 py-1 rounded-lg"
        onClick={()=>handleClickChangeQty(qtyInCart-1)}
      >
        <IconMinus width="16"/>
      </div>
      <span className="text-gray-700 text-center text-base font-bold leading-6 whitespace-nowrap justify-center items-stretch bg-zinc-300 px-7 py-1 rounded-lg">
        {qtyInCart}
      </span>
      <div className="justify-center items-center bg-[#FF4782] flex flex-col px-3 py-1 rounded-lg"
        onClick={()=>handleClickChangeQty(qtyInCart+1)}
      >
        <IconPlus width="16"/>
      </div>
    </div>
  )
}
RenderButtonItemInCart.propTypes = {
  qtyInCart: PropTypes.number,
  cartLineID: PropTypes.string,
  isLoading: PropTypes.bool,
  handleClickButtonAdd: PropTypes.func
}