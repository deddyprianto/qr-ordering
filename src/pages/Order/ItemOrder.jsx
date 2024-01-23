import { useSelector } from "react-redux";
import { IconArrowSolid } from "../../assets/svgIcon";
import { useNavigate } from "react-router-dom";

const ItemOrder = () => {
  const navigate = useNavigate();

  const { theme } = useSelector((state) => state.dataSlicePersisted);
  return (
    <div className="items-stretch self-stretch border border-[color:var(--Brand-color-Primary,#00524C)] flex w-full flex-col rounded-lg border-solid">
      <div className="justify-center items-stretch border-b-[color:var(--Brand-color-Primary,#00524C)] flex w-full flex-col p-3 border-b border-solid">
        <div className="justify-between items-stretch flex gap-5">
          <div className="text-emerald-800 text-center text-sm font-bold leading-5 tracking-wide">
            Dine In
          </div>
          <div
            style={{
              color: theme.textColor,
            }}
            className="text-center text-sm font-medium leading-5 tracking-wide"
          >
            Fusionopolis
          </div>
        </div>
      </div>
      {/* 2 */}
      <div className="p-[12px]">
        <div
          style={{
            color: theme.textColor,
          }}
          className="text-sm font-medium leading-5 tracking-wide w-full mt-3"
        >
          17 Items - $ 142.25
        </div>
        <div className="grid grid-cols-[1fr_1fr] grid-rows-[1fr_1fr] mt-[8px] gap-y-1">
          <div style={{ color: theme.disableColor }}>Order Date & Time</div>
          <div style={{ color: theme.disableColor }}>Queue Number</div>
          <div>31 Jan 2023 &bull; 15:49 </div>
          <div>A0231</div>
        </div>
      </div>
      {/* 3 */}
      <button
        onClick={() => navigate("/ordersummary")}
        className="items-stretch flex justify-between gap-0 mt-3 px-3 py-2 rounded-b-md"
        style={{
          backgroundColor: theme.primary,
        }}
      >
        <IconArrowSolid />
        <div className="text-white text-center text-sm font-bold leading-5 tracking-wide self-center grow whitespace-nowrap my-auto">
          PROCESSING
        </div>
      </button>
    </div>
  );
};

export default ItemOrder;
