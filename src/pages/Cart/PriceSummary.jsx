import { useSelector } from "react-redux";
import { IconArrowBottom, IconArrowUp } from "../../assets/svgIcon";
import { useState } from "react";
import { numberFormatter } from "../../utilities/numberFormatter";
import { Trans } from "react-i18next";

export function PriceSummary() {
  const { theme } = useSelector((state) => state.dataSlice);
  const cartInfo = useSelector((state) => state.dataSlicePersisted.cartInfo);
  const [expandItem, setExpandItem] = useState(true);

  /***
    const calculateServiceCharge = (sc) => {
      let amount = 0;
      if(sc.Type == "Percentage")
        amount = cartInfo.nettAmount * (parseFloat(sc.Value)/100);
      else 
        amount = parseFloat(sc.Value);
      return numberFormatter(amount);
    }
  */
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
            <Trans i18nKey={"subtotal"}/>
          </div>
          <div className="text-gray-700 text-right text-base font-bold leading-6 whitespace-nowrap">
            $ {numberFormatter(cartInfo.grossAmount)}
          </div>
        </div>
        {/*** 
         {serviceCharge?.map((sc)=>{
          return (
            <div className="items-stretch flex justify-between gap-4 mt-2 " key={sc.Name}>
              <div className="justify-center text-gray-700 text-sm font-medium leading-5 tracking-wide grow whitespace-nowrap">
                {sc.Name}
              </div>
              <div className="text-gray-700 text-right text-base font-bold leading-6 whitespace-nowrap">
                $ {calculateServiceCharge(sc)}
              </div>
            </div>
          )
        })} */}
        {cartInfo.gstAmount>0 && <div className="items-stretch flex justify-between gap-4 mt-2 ">
          <div className="justify-center text-gray-700 text-sm font-medium leading-5 tracking-wide grow whitespace-nowrap">
            GST 8%
          </div>
          <div className="text-gray-700 text-right text-base font-bold leading-6 whitespace-nowrap">
            $ {numberFormatter(cartInfo.gstAmount)}
          </div>
        </div>}
        <div className="bg-zinc-300 min-h-[1px] w-full mt-2" />
        <div className="justify-between flex w-full gap-5 mt-2  items-start">
          <div className="text-gray-700 text-sm font-medium leading-5 tracking-wide">
            <Trans i18nKey={"total_payment"}/>
          </div>
          <div
            style={{ color: theme.primary }}
            className="text-base font-bold leading-6 self-stretch"
          >
            $ {numberFormatter(cartInfo.nettAmount)}
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="items-stretch self-stretch flex w-full flex-col">
      <div className="justify-between flex w-full gap-5  items-start">
        <div className="text-gray-700 text-base font-bold leading-6">
          <Trans i18nKey={"payment_summary"}/>
        </div>
        <button
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
            {expandItem ? <Trans i18nKey={"show_less"}/> : <Trans i18nKey={"show_more"}/>}
          </div>
        </button>
      </div>
      {renderItemExpand()}
    </div>
  );
}
