import { RenderItemPrice } from "../Home/SearchItemBar/ItemCard/ItemPrice";
import RenderButtonImageItemProd from "../RenderButtonImageItemProd";
import PropTypes from "prop-types";

const RenderDetailedView = ({
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
      className="grid grid-cols-1 grid-rows-1 bg-white mt-4 rounded-2xl w-full"
    >
      <div>
        <RenderButtonImageItemProd
          handleOpenModalAddItem={handleOpenModalAddItem}
          item={item}
          theme={theme}
          width="w-full"
        />
        <div className="justify-between items-stretch flex grow basis-[0%] flex-col p-2">
          <button className="text-left" onClick={handleOpenModalAddItem}>
            <div className="text-gray-700 text-sm font-medium leading-5 tracking-wide">
              {item.itemName}
            </div>
          </button>
          <div className="flex justify-between items-center mt-[18px]">
            <div className="flex justify-center items-center">
              <RenderItemPrice
                isPromo={item.promo?.length > 0}
                item={item}
                styleMargin="mt-0"
              />
            </div>
            <div className="w-1/2">{renderButtonAdd()}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RenderDetailedView;

RenderDetailedView.propTypes = {
  handleOpenModalAddItem: PropTypes.func,
  item: PropTypes.object,
  theme: PropTypes.object,
  renderButtonAdd: PropTypes.func,
};
