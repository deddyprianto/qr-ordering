import { RenderTagInsight } from "./Home/TagInsight";
import { RenderTagPromo } from "./Home/TagPromo";
import PropTypes from "prop-types";

const RenderButtonImageItemProd = ({
  handleOpenModalAddItem,
  item,
  theme,
  width,
}) => {
  return (
    <button
      className={`flex-col overflow-hidden relative flex aspect-square w-[150px] items-stretch pb-2 ${width}`}
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
        <div className="relative items-stretch flex gap-1 mt-16">
          <RenderTagInsight insights={item.insight} />
        </div>
      </div>
    </button>
  );
};

export default RenderButtonImageItemProd;
RenderButtonImageItemProd.propTypes = {
  handleOpenModalAddItem: PropTypes.func,
  item: PropTypes.object,
  theme: PropTypes.object,
  width: PropTypes.string,
};
