import { IconMasterCard } from "../../assets/svgIcon";
import { useDispatch, useSelector } from "react-redux";
import { Trans } from "react-i18next";
import { useEffect, useRef, useState } from "react";
import { apiOutlet } from "../../services/Outlet";
import { setPaymentMethod } from "../../app/dataSlice";
import { SkeletonPaymentList } from "../../components/Skeleton";

 function PaymentMethod() {
  const dispatch = useDispatch();
  const { paymentMethod } = useSelector((state) => state.dataSlice);
  const { outletName, theme } = useSelector(
    (state) => state.dataSlicePersisted,
  );
  const [isLoading, setIsLoading] = useState(false);
  const [paymentMethodList, setPaymentMethodList] = useState([]);

  const getPaymentMethod = useRef();
  getPaymentMethod.current = async () => {
    try {
      setIsLoading(true);
      const result = await apiOutlet("GET", `${outletName}/paymentmodes`, {});
      setIsLoading(false);
      if (result.resultCode == 200) {
        setPaymentMethodList(result.data);
      } else throw result.message;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPaymentMethod.current();
  }, []);

  return (
    <span className="items-stretch self-stretch flex w-full flex-col">
      <div className="text-gray-700 text-base font-bold leading-6 w-full">
        <Trans i18nKey={"choose_payment_method"} />
      </div>
      <div className="items-stretch flex gap-x-2 mt-4 max-h-[300px] overflow-y-auto">
        {isLoading ? (
          <SkeletonPaymentList />
        ) : (
          paymentMethodList.map((item) => {
            return (
              <button
                onClick={() => dispatch(setPaymentMethod(item))}
                key={item?.displayName}
                style={{
                  borderColor:
                    paymentMethod === item ? theme.Color_Primary : "#D6D6D6",
                  backgroundColor:
                    paymentMethod === item ? theme.Color_Accent : "white",
                }}
                className="w-[160px] flex justify-center items-center border  p-[16px] gap-x-2 rounded-lg border-solid"
              >
                <div>
                  <IconMasterCard />
                </div>
                <div className="text-center">{item.displayName}</div>
              </button>
            );
          })
        )}
      </div>
    </span>
  );
}
export default PaymentMethod