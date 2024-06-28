import { IconMasterCard } from "../../assets/svgIcon";
import { useDispatch, useSelector } from "react-redux";
import { Trans } from "react-i18next";
import { useEffect, useRef, useState } from "react";
import { apiOutlet } from "../../services/Outlet";
import { setPaymentMethod } from "../../app/dataSlice";
import { SkeletonList } from "../../components/Skeleton/SkeletonPaymentList";

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
      <div className="items-stretch self-stretch flex w-full flex-col">
        <div
          className="text-gray-700 text-base font-bold leading-6 w-full"
          id="labelChoosePayments"
        >
          <Trans i18nKey={"choose_payment_method"} />
        </div>
        <div className="flex gap-4 mt-4 max-h-[300px] overflow-y-auto">
          {isLoading ? (
            <SkeletonList />
          ) : (
            paymentMethodList.map((item) => {
              return (
                <button
                  id="paymentMethod"
                  onClick={() => dispatch(setPaymentMethod(item))}
                  key={item?.displayName}
                  style={{
                    borderColor:
                      paymentMethod === item ? theme.Color_Primary : "#D6D6D6",
                    backgroundColor:
                      paymentMethod === item ? theme.Color_Accent : "white",
                  }}
                  className="flex items-center border rounded-lg border-solid px-[16px]"
                >
                  {item.iconUrl ? (
                    <div className="w-16">
                      <img
                        alt="IconPayments"
                        loading="lazy"
                        src={item.iconUrl}
                        className="flex-shrink-0 h-full w-full transparent-image-custom"
                      />
                    </div>
                  ) : (
                    <IconMasterCard />
                  )}

                  <div
                    id="paymentModeName"
                    data-provider={item?.provider}
                    className="flex-shrink-0"
                  >
                    <p>{item.displayName}</p>
                  </div>
                </button>
              );
            })
          )}
        </div>
      </div>
    );
  }
export default PaymentMethod