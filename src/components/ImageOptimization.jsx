import PropTypes from "prop-types";

export const ImageOptimization = ({
  imageItems,
  customStyle,
  width = 40,
  height,
  onAnimationEnding,
  classNaming,
  altCustom,
}) => {
  const domainMappings = {
    "t1.equipweb.biz": "t1-image.equipweb.biz",
    "s1.equipweb.biz": "s1-image.equipweb.biz",
    "s2.equipweb.biz": "s2-image.equipweb.biz",
  };
  let modifiedUrl = imageItems;
  for (const [originalDomain, imageServerDomain] of Object.entries(
    domainMappings,
  )) {
    if (imageItems?.includes(originalDomain)) {
      modifiedUrl = modifiedUrl.replace(originalDomain, imageServerDomain);
      break;
    }
  }

  const pngFormat = `${modifiedUrl}?width=${width}&format=png`;
  const webpFormat = `${modifiedUrl}?width=${width}&format=webp`;
  const jpgFormat = `${modifiedUrl}?width=${width}&format=jpg`;

  return (
    <img
      srcSet={`${webpFormat}, ${jpgFormat}, ${pngFormat}`}
      alt={altCustom}
      width={width}
      height={height}
      style={customStyle}
      onAnimationEnd={onAnimationEnding}
      className={classNaming}
      loading="lazy"
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
