import { RenderTagInsight } from "../Home/TagInsight";
import { RenderTagPromo } from "../Home/TagPromo";
import PropTypes from "prop-types";
import { RenderRetailPrice } from "./RetailPrice";

const RenderListView = ({
  handleOpenModalAddItem,
  item,
  theme,
  renderButtonAdd,
}) => {
  return (
    <div
      style={{
        boxShadow: "0px 4px 10px 0px rgba(0, 0, 0, 0.10)",
      }}
      className="grid grid-cols-[128px_1fr]  bg-white mt-4 rounded-2xl"
    >
      <button
        className="flex-col overflow-hidden relative flex aspect-square w-[150px] items-stretch pr-12 pb-2"
        onClick={handleOpenModalAddItem}
      >
        <img
          alt={"itemImage"}
          loading="lazy"
          src={item?.defaultImageURL || theme?.Image_Item_Place_Holder}
          className="absolute h-full w-full object-cover object-center inset-0 rounded-l-xl"
        />
        {(item?.isDiscounted || false) && <RenderTagPromo />}
        <div className="absolute bottom-1 left-1 right-0">
          <div className="relative items-stretch flex gap-2 mt-16">
            <RenderTagInsight insights={item.insight} />
          </div>
        </div>
      </button>
      <div className="justify-between items-stretch flex grow basis-[0%] flex-col p-2">
        <button className="text-left" onClick={handleOpenModalAddItem}>
          <div className="text-gray-700 text-sm font-medium leading-5 tracking-wide">
            {item.itemName}
          </div>
        </button>
        <div className="grid grid-cols-2">
          <div className=" flex justify-center items-center">
            <RenderRetailPrice item={item} marginTop="0px" />
          </div>
          <div>{renderButtonAdd()}</div>
        </div>
      </div>
    </div>
  );
};

export default RenderListView;

RenderListView.propTypes = {
  handleOpenModalAddItem: PropTypes.func,
  item: PropTypes.object,
  theme: PropTypes.object,
  renderButtonAdd: PropTypes.func,
};
