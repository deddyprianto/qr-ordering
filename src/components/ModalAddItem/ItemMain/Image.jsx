import PropTypes from "prop-types";
import { useSelector } from "react-redux";

export const RenderImage = ({ itemImage }) => {
  const { theme } = useSelector(
    (state) => state.dataSlicePersisted,
  );
  return( 
    <div className="flex items-center justify-center">
      <img
        alt="itemImage"
        loading="lazy"
        src={itemImage || theme.Image_Item_Place_Holder}
        className="rounded-2xl object-cover object-center inset-0"
      />        
    </div>
  );
}

RenderImage.propTypes = {
  itemImage: PropTypes.string
}
