import { useSelector } from "react-redux";
import { RenderTagInsight } from "./Home/TagInsight";
import { RenderTagPromo } from "./Home/TagPromo";
import PropTypes from "prop-types";
import { ImageOptimization } from "./ImageOptimization";

const RenderButtonImageItemProd = ({
  handleOpenModalAddItem,
  item,
  theme,
  width,
}) => {
  const { outletDetail } = useSelector((state) => state.dataSlicePersisted);
  return (
    <button
      className={`flex-col overflow-hidden relative flex aspect-square w-[150px] items-stretch pb-2 ${width}`}
      onClick={handleOpenModalAddItem}
      disabled={outletDetail?.qrOrderingAvailability === "Hidden"}
    >
      <ImageOptimization
        alt={"itemImage"}
        imageItems={item?.defaultImageURL || theme?.Image_Item_Place_Holder}
        classNaming="h-full w-full object-cover object-center"
        customStyle={{
          borderTopLeftRadius: "16px",
          borderTopRightRadius: "16px",
        }}
      />
      {(item?.isDiscounted || false) && <RenderTagPromo />}
      <div className="flex gap-1 absolute bottom-2">
        <RenderTagInsight insights={item.insight} />
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
