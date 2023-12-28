import PropTypes from "prop-types";
import image3 from "../../../assets/image3.png";

export const RenderImage = ({ itemImage }) => {
  return( 
    <div className="h-3/5 flex items-center justify-center">
      <img
        alt="itemImage"
        loading="lazy"
        src={itemImage || image3}
        className="rounded-2xl object-cover object-center inset-0"
      />        
    </div>
  );
}

RenderImage.propTypes = {
  itemImage: PropTypes.string
}
