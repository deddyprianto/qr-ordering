import { useDispatch } from "react-redux";
import { setShowSplashScreen } from "../app/dataSlice";
const RenderSplashScreen = () => {
  const dispatch = useDispatch();

  const handleAnimationEnd = () => {
    dispatch(setShowSplashScreen(false));
  };
  return (
    <img
      alt="splashScreen"
      onAnimationEnd={handleAnimationEnd}
      className="splash-image"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/fb0551243645df4fdd79fa97aa6b14d9368a75de464edf18120823a4068a0133?apiKey=7ef2d401d2464e0bb0e4708e7eee43f9&width=100"
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
