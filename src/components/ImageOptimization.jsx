import PropTypes from "prop-types";

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
  const widthCustom = 40;

  const pgnFormat = `${modifiedUrl}?width=${widthCustom}&format=png`;
  const webpFormat = `${modifiedUrl}?width=${widthCustom}&format=webp`;
  const jpgFormat = `${modifiedUrl}?width=${widthCustom}&format=jpg`;

  const srcSet = `${pgnFormat} 1x, ${webpFormat} 2x, ${jpgFormat} 3x`;

  return (
    <img
      srcSet={srcSet}
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
