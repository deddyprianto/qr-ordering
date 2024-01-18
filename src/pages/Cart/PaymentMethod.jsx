import PropTypes from "prop-types";
import { IconMasterCard } from "../../assets/svgIcon";
import { useSelector } from "react-redux";
import { Trans } from "react-i18next";

export function PaymentMethod({
  selectedPaymentMethod,
  setSelectedPaymentMethod,
}) {
  const theme = useSelector((state) => state.dataSlice.theme);
  const paymentMethod = [
    "Credit Card",
    "After Pay",
    "Amazon",
    "Cash App",
    "PayNow",
  ];
  return (
    <span className="items-stretch self-stretch flex w-full flex-col">
      <div className="text-gray-700 text-base font-bold leading-6 w-full">
        <Trans i18nKey={"choose_payment_method"}/>
      </div>
      <div className="items-stretch  flex  gap-x-2 mt-4 scroll-container">
        {paymentMethod.map((item) => {
          return (
            <button
              onClick={() => setSelectedPaymentMethod(item)}
              key={item}
              className={`w-[160px] flex justify-center items-center border  p-[16px] gap-x-2 rounded-lg border-solid ${
                selectedPaymentMethod === item
                  ? `bg-[#FFF2DF] border-[${theme.primary}]`
                  : "bg-white border-[#D6D6D6]"
              } `}
            >
              <div>
                <IconMasterCard />
              </div>
              <div className="text-center">{item}</div>
            </button>
          );
        })}
      </div>
    </span>
  );
}
PaymentMethod.propTypes = {
  selectedPaymentMethod: PropTypes.string,
  setSelectedPaymentMethod: PropTypes.func,
};
