import { useSelector } from "react-redux";
import { IconArrowSolid } from "../../assets/svgIcon";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types"
import { Trans } from "react-i18next";
import { numberFormatter } from "../../utilities/numberFormatter";
import { dateFormatter } from "./DateFormatter";

const ItemOrder = ({ order }) => {
  const navigate = useNavigate();

  const { theme } = useSelector((state) => state.dataSlicePersisted);
  return (
    <div
      style={{
        borderColor: theme.Color_Primary,
      }}
      className="items-stretch self-stretch border flex w-full flex-col rounded-lg border-solid mb-4"
    >
      <div
        style={{
          borderColor: theme.Color_Primary,
        }}
        className="justify-center items-stretch flex w-full flex-col p-3 border-b border-solid"
      >
        <div className="justify-between items-stretch flex gap-5">
          <div
            style={{
              color: theme.Color_Primary,
            }}
            className="text-center text-sm font-bold leading-5 tracking-wide"
          >
            {order.orderType}
          </div>
          <div className="text-center text-sm font-medium leading-5 tracking-wide">
            {order.outletName}
          </div>
        </div>
      </div>
      {/* 2 */}
      <div className="p-[12px]">
        <div className="text-sm font-medium leading-5 tracking-wide w-full mt-3">
          {order.noOfItems} <Trans i18nKey={"items"}/> - $ {numberFormatter(order.amount)}
        </div>
        <div className="grid grid-cols-[1fr_1fr] grid-rows-[1fr_1fr] mt-[8px] gap-y-1">
          <div style={{color: "#888787"}}><Trans i18nKey={"order_date_time"}/></div>
          <div style={{color: "#888787"}}><Trans i18nKey={"queue_no"}/></div>
          <div>{dateFormatter(order.orderDate)} </div>
          <div>A0231</div>
        </div>
      </div>
      {/* 3 */}
      <button
        onClick={() => navigate("/ordersummary")}
        className="items-stretch flex justify-between gap-0 mt-3 px-3 py-2 rounded-b-md"
        style={{
          backgroundColor: theme.Color_Primary,
        }}
      >
        <IconArrowSolid />
        <div className="text-white text-left text-sm font-bold leading-5 tracking-wide self-center grow whitespace-nowrap my-auto">
          {order.status}
        </div>
      </button>
    </div>
  );
};

ItemOrder.propTypes = {
  order: PropTypes.ay
}
export default ItemOrder;
