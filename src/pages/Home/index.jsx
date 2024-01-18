import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setShowSplashScreen } from "../../app/dataSlicePersisted";
import { RenderSplashScreen } from "../../components/SplashScreen";
import { MainView } from "./MainVIew";
import { RenderOrderType } from "./OrderType";
import RenderCartSummary from "../../components/Home/RenderCartSummary";

export function Component() {
  const dispatch = useDispatch();
  const { cartInfo, orderType } = useSelector(
    (state) => state.dataSlicePersisted,
  );
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
    else if (orderType == "") return <RenderOrderType />;
    else return <MainView />;
  };

  return (
    <React.Fragment>
      {renderMain()}
      {cartInfo?.details?.length > 0 && <RenderCartSummary />}
    </React.Fragment>
  );
}
