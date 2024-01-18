import { useSelector } from "react-redux";
import { IconArrowBottom, IconArrowUp } from "../../assets/svgIcon";
import { useState } from "react";

export function PriceSummary() {
  const theme = useSelector((state) => state.dataSlice.theme);
  const [expandItem, setExpandItem] = useState(true);
  const renderItemExpand = () => {
    return (
      <div
        className="scroll-containerExpand px-[8px] py-1"
        style={{
          height: expandItem ? "180px" : "0px",
          transition: "height 0.5s ease-out",
        }}
      >
        <div className="items-stretch flex justify-between gap-4 mt-2 ">
          <div className="justify-center text-gray-700 text-sm font-medium leading-5 tracking-wide grow whitespace-nowrap">
            Subtotal
          </div>
          <div className="text-gray-700 text-right text-base font-bold leading-6 whitespace-nowrap">
            $ 348.00
          </div>
        </div>
        <div className="items-stretch flex justify-between gap-4 mt-2 ">
          <div className="justify-center text-gray-700 text-sm font-medium leading-5 tracking-wide grow whitespace-nowrap">
            Service Charge
          </div>
          <div className="text-gray-700 text-right text-base font-bold leading-6 whitespace-nowrap">
            $ 34.80
          </div>
        </div>
        <div className="items-stretch flex justify-between gap-4 mt-2 ">
          <div className="justify-center text-gray-700 text-sm font-medium leading-5 tracking-wide grow whitespace-nowrap">
            GST 8%
          </div>
          <div className="text-gray-700 text-right text-base font-bold leading-6 whitespace-nowrap">
            $ 30.62
          </div>
        </div>
        <div className="bg-zinc-300 min-h-[1px] w-full mt-2" />
        <div className="justify-between flex w-full gap-5 mt-2  items-start">
          <div className="text-gray-700 text-sm font-medium leading-5 tracking-wide">
            TOTAL PAYMENT
          </div>
          <div
            style={{ color: theme.primary }}
            className="text-base font-bold leading-6 self-stretch"
          >
            $ 413.42
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="items-stretch self-stretch flex w-full flex-col">
      <div className="justify-between flex w-full gap-5  items-start">
        <div className="text-gray-700 text-base font-bold leading-6">
          Payment Summary
        </div>
        <div
          onClick={() => setExpandItem(!expandItem)}
          className="items-stretch self-stretch flex justify-between gap-1"
        >
          <div>
            {expandItem ? (
              <IconArrowBottom color={theme.secondary} />
            ) : (
              <IconArrowUp color={theme.secondary} />
            )}
          </div>
          <div
            style={{
              color: theme.secondary,
            }}
            className="text-base font-bold leading-6 grow whitespace-nowrap self-start"
          >
            {expandItem ? "More" : "Show"} Less
          </div>
        </div>
      </div>
      {renderItemExpand()}
    </div>
  );
}
