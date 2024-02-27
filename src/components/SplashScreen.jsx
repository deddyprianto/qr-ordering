import { useDispatch, useSelector } from "react-redux";
import { setShowSplashScreen } from "../app/dataSlice";

const RenderSplashScreen = () => {
  const { theme } = useSelector((state) => state.dataSlicePersisted);
  const dispatch = useDispatch();

  const handleAnimationEnd = () => {
    dispatch(setShowSplashScreen(false));
  };
  return (
    <img
      alt="splashScreen"
      onAnimationEnd={handleAnimationEnd}
      className="splash-image"
      src={theme?.Image_Splash_Screen}
      style={{
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
