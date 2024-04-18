import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import { Trans } from "react-i18next";
import { RenderItem } from "./ItemDetail";
import { RenderPricingSummary } from "./PricingSummary";

export function OrderItemSummary({ order }) {
  const { theme } = useSelector((state) => state.dataSlicePersisted);
  const details = order.details;

  
  
  return (
    <div
      style={{
        borderColor: theme?.Color_Primary,
        backgroundColor: theme?.Color_Tertiary,
      }}
      className="mt-[24px] justify-center items-stretch self-stretch border flex w-full flex-col mx-auto pb-4 rounded-lg border-solid"
    >
      <div
        style={{
          backgroundColor: theme.Color_Primary,
        }}
        className="text-white text-sm font-medium leading-5 tracking-wide whitespace-nowrap justify-center  w-full pl-4 pr-16 py-1.5 items-start rounded-t-md"
      >
        <Trans i18nKey={"order_summary"} />
      </div>
      <div className="items-stretch flex w-full flex-col mt-4 px-4 rounded-lg">
        <div className="items-stretch bg-zinc-300 flex gap-1 p-2">
          <div className="text-gray-700 text-sm font-medium leading-5 tracking-wide grow shrink basis-auto">
            <Trans i18nKey={"qty_item"} />
          </div>
          <div className="text-gray-700 text-right text-sm font-bold leading-5 tracking-wide whitespace-nowrap">
            <Trans i18nKey={"price"} />
          </div>
        </div>
        {details?.map((item) => {
          return <RenderItem item={item} key={item.itemNo}></RenderItem>;
        })}
      </div>
      <RenderPricingSummary order={order} />
    </div>
  );
}

OrderItemSummary.propTypes = {
  order: PropTypes.any
}