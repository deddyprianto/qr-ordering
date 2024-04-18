import { useState } from "react";
import { IconDineInCart, IconTakeAwayBag } from "../../assets/svgIcon";
import { useSelector, useDispatch } from "react-redux";
import { apiCart } from "../../services/Cart";
import { SkeletonList } from "../../components/Skeleton/SkeletonPaymentList";
import { setCartInfo, setOrderType } from "../../app/dataSlicePersisted";

function OrderingMode() {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const { outletSetting } = useSelector((state) => state.dataSlice);
  const { cartInfo, orderType, theme } = useSelector(
    (state) => state.dataSlicePersisted,
  );

  const updatedOutletSetting = JSON.parse(JSON.stringify(outletSetting));
  for (const key in updatedOutletSetting) {
    if (key.endsWith("_option")) {
      const optionKey = key.slice(0, -7).toLowerCase();
      const formattedOrderType = orderType.toLowerCase().replace("_", "");

      if (optionKey.toLowerCase().replace("_", "") === formattedOrderType) {
        updatedOutletSetting[key] = {
          ...updatedOutletSetting[key],
          displayName: orderType,
        };
      }
    }
  }

  const handleClickOrderingMode = async (orderingMode) => {
    dispatch(setOrderType(orderingMode));
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
        <SkeletonList />
      ) : (
        <div
          className="flex overflow-x-auto gap-4 mt-4 text-sm font-medium tracking-wide"
          id="containerOrderingMode"
        >
          {updatedOutletSetting.dine_in_option?.enable && (
            <button
              id="dineInButton"
              onClick={() => handleClickOrderingMode("DINEIN")}
              className="flex flex-col justify-center p-4  rounded-lg border border-solid"
              style={{
                backgroundColor:
                  orderType === updatedOutletSetting.dine_in_option.displayName
                    ? theme?.Color_Accent
                    : "white",
                borderColor:
                  orderType === updatedOutletSetting.dine_in_option.displayName
                    ? theme?.Color_Primary
                    : "rgb(212 212 216)",
              }}
            >
              <div className="flex gap-4">
                <IconDineInCart />
                <div id="orderingModeDineIN" className="flex-1 my-auto">
                  {updatedOutletSetting.dine_in_option.displayName}
                </div>
              </div>
            </button>
          )}
          {updatedOutletSetting.cash_carry_option?.enable && (
            <button
              id="takeAwayButton"
              onClick={() => handleClickOrderingMode("CASH_CARRY")}
              className="flex flex-col justify-center p-4  rounded-lg border border-solid"
              style={{
                backgroundColor:
                  orderType ===
                  updatedOutletSetting.cash_carry_option.displayName
                    ? theme?.Color_Accent
                    : "white",

                borderColor:
                  orderType ===
                  updatedOutletSetting.cash_carry_option.displayName
                    ? theme?.Color_Primary
                    : "rgb(212 212 216)",
              }}
            >
              <div className="flex gap-4">
                <IconTakeAwayBag />
                <div className="flex-1 my-auto" id="orderingModeTakeAway">
                  {updatedOutletSetting.cash_carry_option.displayName}
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
