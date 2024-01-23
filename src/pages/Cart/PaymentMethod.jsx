import { IconMasterCard } from "../../assets/svgIcon";
import { useDispatch, useSelector } from "react-redux";
import { Trans } from "react-i18next";
import { useEffect, useState } from "react";
import { apiOutlet } from "../../services/Outlet";
import { setPaymentMethod } from "../../app/dataSlice";

export function PaymentMethod() {
  const dispatch = useDispatch();
  const { theme, paymentMethod } = useSelector((state) => state.dataSlice);
  const outletName = useSelector((state) => state.dataSlicePersisted.outletName);
  const [ paymentMethodList, setPaymentMethodList ] = useState([]);

  useEffect(()=>{
    getPaymentMethod()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  const getPaymentMethod = async() => {
    try {
      const result = await apiOutlet("GET", `${outletName}/paymentmodes`, {});
      if(result.resultCode == 200){
        setPaymentMethodList(result.data);
      }
      else throw(result.message);
    } catch (error) {
      console.log(error);
    }
  };
  
  return (
    <span className="items-stretch self-stretch flex w-full flex-col">
      <div className="text-gray-700 text-base font-bold leading-6 w-full">
        <Trans i18nKey={"choose_payment_method"}/>
      </div>
      <div className="items-stretch flex gap-x-2 mt-4 max-h-[300px] overflow-y-auto">
        {paymentMethodList.map((item) => {
          return (
            <button
              onClick={() => dispatch(setPaymentMethod(item))}
              key={item.paymentMode}
              className={`w-[160px] flex justify-center items-center border p-[16px] gap-x-2 rounded-lg border-solid ${
                paymentMethod.paymentMode === item.paymentMode
                  ? `bg-[#FFF2DF] border-[${theme.primary}]`
                  : "bg-white border-[#D6D6D6]"
              } `}
            >
              <div>
                <IconMasterCard />
              </div>
              <div className="text-center">{item.displayName}</div>
            </button>
          );
        })}
      </div>
    </span>
  );
}
