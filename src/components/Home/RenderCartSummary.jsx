import { useSelector } from "react-redux";
import { IconArrowRight, IconCart } from "../../assets/svgIcon";
import { useNavigate } from "react-router-dom";
import { Trans } from "react-i18next";
import { getCurrencyHelper } from "../../helper";

const RenderCartSummary = () => {
  const navigate = useNavigate();
  const { cartInfo, orderType } = useSelector(
    (state) => state.dataSlicePersisted,
  );
  const { isSearchItem } = useSelector((state) => state.dataSlice);
  const memberInfo = useSelector(
    (state) => state.dataSlicePersisted.memberInfo,
  );
  const { theme } = useSelector((state) => state.dataSlicePersisted);

  const totalQuantity = cartInfo?.details.reduce(
    (accumulator, currentValue) => {
      return accumulator + currentValue.quantity;
    },
    0,
  );

  if (orderType) {
    return (
      <button
        onClick={() => navigate("/cart")}
        style={{
          backgroundColor: theme.Color_Secondary,
        }}
        className={`w-[95%] lg:w-[42%] flex justify-between items-stretch border-[color:var(--Brand-color-Primary,#00524C)] shadow-lg gap-5 p-[8px] rounded-xl border-[1px] border-solid absolute left-1/2 -translate-x-1/2 -translate-y-1/2 ${
          memberInfo?.membershipNo ? "bottom-11" : "-bottom-5"
        } ${isSearchItem ? "hidden" : "z-30"}`}
      >
        <div className="items-stretch flex justify-between gap-2.5">
          <div>
            <span className="absolute flex w-[25px] h-[25px] top-1 left-7">
              <span
                style={{
                  backgroundColor: theme.warning,
                }}
                className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75`}
              ></span>
              <span
                style={{ backgroundColor: theme.warning }}
                className={`relative rounded-full w-[25px] h-[25px] text-white text-center leading-[25px] text-[12px]`}
              >
                {totalQuantity}
              </span>
            </span>
            <IconCart />
          </div>
          <div className="text-white text-center text-base font-semibold leading-6 self-center grow whitespace-nowrap my-auto pl-2">
            $ {getCurrencyHelper(cartInfo?.nettAmount)}
          </div>
        </div>
        <div className="items-center flex justify-between gap-0">
          <div className="text-white text-center text-lg font-semibold leading-6 grow whitespace-nowrap my-auto">
            <Trans i18nKey={"checkout"} />
          </div>
          <div>
            <IconArrowRight />
          </div>
        </div>
      </button>
    );
  } else {
    return null;
  }
};
export default RenderCartSummary;
