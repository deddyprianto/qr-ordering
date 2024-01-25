import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import { Trans } from "react-i18next";

export function OrderInformation({ order }) {
  const { theme } = useSelector((state) => state.dataSlicePersisted);

  return (
    <div
      style={{
        borderColor: theme.Color_Primary,
      }}
      className="w-full mt-[24px] justify-center items-stretch self-stretch border bg-white flex  flex-col pb-4 rounded-lg border-solid"
    >
      <div
        style={{
          backgroundColor: theme.Color_Primary,
        }}
        className="text-white text-sm font-medium leading-5 tracking-wide whitespace-nowrap justify-center  w-full pl-4 pr-16 py-1.5 items-start rounded-t-md"
      >
        <Trans i18nKey={"order_information"}/>
      </div>
      <div className="justify-between items-stretch flex gap-5 mt-2.5">
        <div className="justify-center items-stretch flex grow basis-[0%] flex-col">
          <div className="text-gray-700 text-center text-xs font-medium leading-4 tracking-wide">
            <Trans i18nKey={"order_id"}/>
          </div>
          <div className="text-gray-700 text-center text-base font-bold leading-6 whitespace-nowrap">
            {order.orderHdrID}
          </div>
        </div>
        <div className="justify-center items-stretch flex grow basis-[0%] flex-col border-l border-[#D6D6D6]">
          <div className="text-gray-700 text-center text-xs font-medium leading-4 tracking-wide">
            <Trans i18nKey={"queue_no"}/>
          </div>
          <div className="text-gray-700 text-right text-base font-bold leading-6 self-center whitespace-nowrap">
            {order.queueNo}
          </div>
        </div>
      </div>
      <div className="bg-zinc-300 min-h-[1px] w-full mt-2.5" />
      <div className="justify-between items-stretch flex gap-2 mt-2.5 px-4">
        <div className="justify-center text-gray-700 text-sm font-bold leading-5 tracking-wide grow whitespace-nowrap">
          <Trans i18nKey={"name"}/>
        </div>
        <div className="text-gray-700 text-right text-sm font-medium leading-5 tracking-wide whitespace-nowrap">
          GUEST
        </div>
      </div>
      <div className="justify-between items-stretch flex gap-2 mt-2.5 px-4">
        <div className="justify-center text-gray-700 text-sm font-bold leading-5 tracking-wide grow whitespace-nowrap">
          <Trans i18nKey={"table"}/>
        </div>
        <div className="text-gray-700 text-right text-sm font-medium leading-5 tracking-wide whitespace-nowrap">
          999
        </div>
      </div>
      <div className="justify-between items-stretch flex gap-2 mt-2.5 px-4">
        <div className="justify-center text-gray-700 text-sm font-bold leading-5 tracking-wide grow whitespace-nowrap">
          <Trans i18nKey={"order_id"}/>
        </div>
        <div className="text-gray-700 text-right text-sm font-medium leading-5 tracking-wide whitespace-nowrap">
          {order.orderHdrID}
        </div>
      </div>
      <div className="justify-between items-stretch flex gap-2 mt-2.5 px-4">
        <div className="justify-center text-gray-700 text-sm font-bold leading-5 tracking-wide grow whitespace-nowrap">
          <Trans i18nKey={"order_type"}/>
        </div>
        <div className="text-gray-700 text-right text-sm font-medium leading-5 tracking-wide whitespace-nowrap">
          {order.orderType=="DINEIN"?"Dine In": "Take Away"}
        </div>
      </div>
      <div className="justify-between items-stretch flex gap-2 mt-2.5 px-4">
        <div className="justify-center text-gray-700 text-sm font-bold leading-5 tracking-wide grow whitespace-nowrap">
          <Trans i18nKey={"order_time"}/>
        </div>
        <div className="text-gray-700 text-right text-sm font-medium leading-5 tracking-wide whitespace-nowrap">
          {/* {order.} */}
        </div>
      </div>
    </div>
  );
}

OrderInformation.propTypes = {
  order: PropTypes.any
}