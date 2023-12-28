import { useSelector } from "react-redux";
import { IconArrowRight, IconCart } from "../../assets/svgIcon";

const RenderToastCart = () => {
  const isSearchItem = useSelector(
    (state) => state.dataSlicePersisted.isSearchItem,
  );
  return (
    <div
      className={`justify-between items-stretch border-[color:var(--Brand-color-Primary,#00524C)] shadow-lg bg-[rgb(255,71,130)] flex gap-5 p-[8px] rounded-xl border-[1px] border-solid absolute bottom-11 w-[95%] left-1/2 lg:w-[44%] ${
        isSearchItem ? "z-0" : "z-50"
      } `}
      style={{
        transform: "translate(-50%, -50%)",
      }}
    >
      <div className="items-stretch flex justify-between gap-2.5">
        <div>
          <span className="absolute flex w-[25px] h-[25px] top-1 left-7">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#CF3030] opacity-75"></span>
            <span className="relative  rounded-full w-[25px] h-[25px] bg-[#CF3030] text-white text-center leading-[25px] text-[12px]">
              2
            </span>
          </span>
          <IconCart />
        </div>
        <div className="text-white text-center text-base font-semibold leading-6 self-center grow whitespace-nowrap my-auto">
          $ 2.50
        </div>
      </div>
      <div className="items-center flex justify-between gap-0">
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

export default RenderToastCart;
