import { useState } from "react";
import { IconDineInCart, IconTakeAwayBag } from "../../assets/svgIcon";
import { useSelector, useDispatch } from "react-redux";
import { apiCart } from "../../services/Cart";
import { SkeletonOrderingTypeList } from "../../components/Skeleton/SkeletonPaymentList";
import { setCartInfo } from "../../app/dataSlicePersisted";

function OrderingMode() {
  const dispatch = useDispatch();

  const [isSelectedOrderingMode, setIsSelectedOrderingMode] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { outletSetting } = useSelector((state) => state.dataSlice);

  const { cartInfo } = useSelector((state) => state.dataSlicePersisted);

  const handleClickOrderingMode = async (orderingMode) => {
    setIsSelectedOrderingMode(orderingMode);
    const payload = {
      orderType: orderingMode.toUpperCase(),
    };

    try {
      setIsLoading(true);
      const result = await apiCart(
        "POST",
        `${cartInfo?.uniqueID}/switchordertype`,
        payload,
      );
      setIsLoading(false);
      dispatch(setCartInfo(result.data));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col self-stretch text-gray-700 leading-[140%] max-w-[398px]">
      <div className="w-full text-base font-bold">Choose Ordering Type</div>
      {isLoading ? (
        <SkeletonOrderingTypeList />
      ) : (
        <div
          className="flex overflow-x-auto gap-4 mt-4 text-sm font-medium tracking-wide"
          id="containerOrderingMode"
        >
          {outletSetting.dine_in_option?.enable && (
            <button
              id="dineInButton"
              onClick={() =>
                handleClickOrderingMode(
                  outletSetting.dine_in_option.displayName,
                )
              }
              className={`flex flex-col justify-center p-4  rounded-lg border border-solid  ${
                isSelectedOrderingMode ===
                outletSetting.dine_in_option.displayName
                  ? "bg-orange-100 border-emerald-800"
                  : "bg-white border-zinc-300"
              }`}
            >
              <div className="flex gap-4">
                <IconDineInCart />
                <div id="orderingModeDineIN" className="flex-1 my-auto">
                  {outletSetting.dine_in_option.displayName}
                </div>
              </div>
            </button>
          )}
          {outletSetting.cash_carry_option?.enable && (
            <button
              id="takeAwayButton"
              onClick={() =>
                handleClickOrderingMode(
                  outletSetting.cash_carry_option.displayName,
                )
              }
              className={`flex flex-col justify-center p-4  rounded-lg border border-solid  ${
                isSelectedOrderingMode ===
                outletSetting.cash_carry_option.displayName
                  ? "bg-orange-100 border-emerald-800"
                  : "bg-white border-zinc-300"
              }`}
            >
              <div className="flex gap-4">
                <IconTakeAwayBag />
                <div className="flex-1 my-auto" id="orderingModeTakeAway">
                  {outletSetting.cash_carry_option.displayName}
                </div>
              </div>
            </button>
          )}
        </div>
      )}
    </div>
  );
}
export default OrderingMode;
