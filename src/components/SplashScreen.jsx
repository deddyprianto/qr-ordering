import { useDispatch, useSelector } from "react-redux";
import { setShowSplashScreen } from "../app/dataSlice";
import { ImageOptimization } from "./ImageOptimization";

const RenderSplashScreen = () => {
  const { theme } = useSelector((state) => state.dataSlicePersisted);
  const dispatch = useDispatch();

  const handleAnimationEnd = () => {
    dispatch(setShowSplashScreen(false));
  };
  return (
    <ImageOptimization
      altCustom="splashScreen"
      onAnimationEnding={handleAnimationEnd}
      classNaming="splash-image"
      imageItems={theme?.Image_Splash_Screen}
      customStyle={{
        zIndex: 999999,
        position: "absolute",
        inset: "0px",
        objectPosition: "center",
        width: "100vw",
        height: "100vh",
      }}
    />
  );
};
export default RenderSplashScreen;
