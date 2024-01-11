import { Suspense } from "react";
import { useImage } from "react-image";
import PropTypes from "prop-types";

function MyImageComponent({ imageItems, customStyle, width, height = "100%" }) {
  const { src } = useImage({
    srcList: imageItems,
  });

  return (
    <img
      src={src}
      alt="SplashScreen"
      className={customStyle}
      width={width}
      height={height}
    />
  );
}
MyImageComponent.propTypes = {
  imageItems: PropTypes.string,
  customStyle: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
};

export const ImageOptimization = ({
  imageItems,
  customStyle,
  width,
  height,
}) => {
  return (
    <Suspense>
      <MyImageComponent
        imageItems={imageItems}
        customStyle={customStyle}
        width={width}
        height={height}
      />
    </Suspense>
  );
};

ImageOptimization.propTypes = {
  imageItems: PropTypes.string,
  customStyle: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
};
