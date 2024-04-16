import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { ImageOptimization } from "../../ImageOptimization";

export const RenderImage = ({ itemImage }) => {
  const { theme } = useSelector((state) => state.dataSlicePersisted);
  return (
    <div className="flex items-center justify-center">
      <ImageOptimization
        altCustom="itemImage"
        imageItems={itemImage || theme.Image_Item_Place_Holder}
        classNaming="rounded-2xl object-cover object-center inset-0 w-full h-full"
      />
    </div>
  );
};

RenderImage.propTypes = {
  itemImage: PropTypes.string
}
