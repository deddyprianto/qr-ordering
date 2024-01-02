import { PropTypes } from 'prop-types';
import { useSelector } from "react-redux";
import { IconArrowRight, IconCart } from "../../assets/svgIcon";
import { useNavigate } from 'react-router-dom';

const RenderToastCart = ({ numOfItems, totalAmount }) => {
  const navigate = useNavigate();
  const { isSearchItem, isCartSummaryBlink } = useSelector(
    (state) => state.dataSlice
  );
  
  const memberInfo = useSelector((state) => state.dataSlicePersisted.memberInfo);
  return (
    <div
      className={`justify-between items-stretch border-[color:var(--Brand-color-Primary,#00524C)] shadow-lg bg-[rgb(255,71,130)] flex gap-5 p-[8px] rounded-xl border-[1px] border-solid absolute 
        ${memberInfo?.membershipNo?"bottom-11":"bottom-0"} 
        w-[95%] left-1/2 ${
        isSearchItem ? "hidden" : "z-30"
      } `}
      style={{
        transform: "translate(-50%, -50%)",
      }}
    >
      <div className="items-stretch flex justify-between gap-2.5">
        <div>
          <span className="absolute flex w-[25px] h-[25px] top-1 left-7">
            {isCartSummaryBlink && <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#CF3030] opacity-75"></span>}
            <span className="relative  rounded-full w-[25px] h-[25px] bg-[#CF3030] text-white text-center leading-[25px] text-[12px]">
              {numOfItems}
            </span>
          </span>
          <IconCart />
        </div>
        <div className="text-white text-center text-base font-semibold leading-6 self-center grow whitespace-nowrap my-auto pl-2">
          $ {totalAmount}
        </div>
      </div>
      <div className="items-center flex justify-between gap-0"
        onClick={() => navigate("/cart")}  
      >
        <div className="text-white text-center text-lg font-semibold leading-6 grow whitespace-nowrap my-auto">
          CHECKOUT
        </div>
        <div>
          <IconArrowRight />
        </div>
      </div>
    </div>
  );
};

RenderToastCart.propTypes = {
  numOfItems: PropTypes.any,
  totalAmount: PropTypes.any
}
export default RenderToastCart;