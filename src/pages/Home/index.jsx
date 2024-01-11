import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setShowSplashScreen } from "../../app/dataSlicePersisted";
import { RenderSplashScreen } from "../../components/SplashScreen";
import { MainView } from "./MainVIew";

export function Component() {

  const dispatch = useDispatch();
  const { isSplashScreenShow } = useSelector(
    (state) => state.dataSlicePersisted,
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      dispatch(setShowSplashScreen(false));
    }, 2000); // 5000 milliseconds = 5 seconds
    return () => {
      clearTimeout(timeoutId);
    };
  }, [dispatch]);

  const renderMain = () => {
    if (isSplashScreenShow) return <RenderSplashScreen />;
    else return <MainView />;
  };

  return <React.Fragment>{renderMain()}</React.Fragment>;
}
