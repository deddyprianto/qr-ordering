import { useSelector } from "react-redux";
import { OrderInformation } from "./OrderInformation";
import { OrderItemSummary } from "./OrderItemSummary";
export function Component() {
  const { theme } = useSelector((state) => state.dataSlice);
  let isProgress = false;
  return (
    <div className="p-[16px]">
      <div
        className={`${
          !isProgress ? "bg-[#FFF2DF]" : "bg-[#CEFFDD]"
        }  rounded-lg p-[16px]`}
      >
        <div
          className="text-center"
          style={{
            color: theme.textColor,
          }}
        >
          {!isProgress
            ? "Please wait... we are placing your order. Don’t close the page."
            : "successfully sent to our kitchen"}
          Your order
        </div>
      </div>
      <OrderInformation />
      <OrderItemSummary />
    </div>
  );
}
