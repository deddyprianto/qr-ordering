import { Suspense, lazy, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setShowSplashScreen } from "../../app/dataSlicePersisted";
import RenderCartSummary from "../../components/Home/RenderCartSummary";
import { NotAvailable } from "./NotAvailable";

const RenderOrderType = lazy(() => import("./OrderType"));
const MainView = lazy(() => import("./MainVIew"));
const RenderSplashScreen = lazy(() => import("../../components/SplashScreen"));

export function Component() {
  const dispatch = useDispatch();
  const { cartInfo, orderType } = useSelector(
    (state) => state.dataSlicePersisted,
  );
  const { isSplashScreenShow, outletDetail } = useSelector(
    (state) => state.dataSlicePersisted,
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      dispatch(setShowSplashScreen(false));
    }, 2000);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [dispatch]);

  const renderContent = () => {
    if (isSplashScreenShow) {
      return <RenderSplashScreen />;
    } else if(!outletDetail?.isQrOrderingAvailable) {
      return <NotAvailable isOutsideOperational={false}/>
    } else if(!outletDetail?.isActiveAllDay && !outletDetail?.isInOperationalHours) {
      return <NotAvailable isOutsideOperational={true}/>
    } else if (!orderType) {
      return <RenderOrderType />;
    } else {
      return <MainView />;
    }
  };

  return (
    <Suspense
      fallback={
        <div className="text-center font-bold">
          Pls wait, getting your components...
        </div>
      }
    >
      {renderContent()}
      {cartInfo?.details?.length > 0 && <RenderCartSummary />}
    </Suspense>
  );
}
