import { useImage } from "react-image";
import PropTypes from "prop-types";

function MyImageComponent({ imageItems, customStyle, width, height = "100%" }) {
  const { src } = useImage({
    srcList: imageItems,
  });

  return (
    <img
      src={src}
      alt="imageComponent"
      style={customStyle}
      width={width}
      height={height}
    />
  );
}
MyImageComponent.propTypes = {
  imageItems: PropTypes.string,
  customStyle: PropTypes.object,
  width: PropTypes.any,
  height: PropTypes.any,
};

export const ImageOptimization = ({
  imageItems,
  customStyle,
  width,
  height,
  onAnimationEnding,
  classNaming,
  altCustom,
}) => {
  const modifiedUrl = imageItems?.replace("t1", "t1-image");
  const widthCustom = 43;
  const format = "webp";
  const fullURL = `${modifiedUrl}?width=${widthCustom}&format=${format}`;

  return (
    <img
      src={fullURL}
      alt={altCustom}
      width={width}
      height={height}
      style={customStyle}
      onAnimationEnd={onAnimationEnding}
      className={classNaming}
    />
  );
};

ImageOptimization.propTypes = {
  imageItems: PropTypes.string,
  customStyle: PropTypes.object,
  width: PropTypes.any,
  height: PropTypes.any,
  onAnimationEnding: PropTypes.func,
  classNaming: PropTypes.string,
  altCustom: PropTypes.string,
};
