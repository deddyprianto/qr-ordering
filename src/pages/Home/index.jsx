import { Suspense, lazy, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import RenderCartSummary from "../../components/Home/RenderCartSummary";
import { NotAvailable } from "./NotAvailable";
import RenderPOSOffline from "../../components/RenderPOSOffline";
import { setIsPOSOffline } from "../../app/dataSlice";

const RenderOrderType = lazy(() => import("./OrderType"));
const MainView = lazy(() => import("./MainVIew"));
const RenderSplashScreen = lazy(() => import("../../components/SplashScreen"));
const RenderValidityError = lazy(
  () => import("../../components/RenderValidityError"),
);

export function Component() {
  const dispatch = useDispatch();

  const { cartInfo, outletDetail, orderType, outletName } = useSelector(
    (state) => state.dataSlicePersisted,
  );
  const { isValidUrl, isSplashScreenShow, isPOSOffline } = useSelector(
    (state) => state.dataSlice,
  );

  useEffect(() => {
    const isPOSOnlineData = outletDetail?.posTerminals?.find(
      (item) => item.outletName === outletName,
    );
    if (!isPOSOnlineData?.isOnline) {
      dispatch(setIsPOSOffline(true));
    } else {
      dispatch(setIsPOSOffline(false));
    }
  }, [dispatch, outletDetail.posTerminals, outletName]);
  const renderContent = () => {
    if (!isValidUrl) {
      return <RenderValidityError />;
    } else if (isSplashScreenShow) {
      return <RenderSplashScreen />;
    } else if (isPOSOffline) {
      return <RenderPOSOffline />;
    } else if (outletDetail?.qrOrderingAvailability === "InActive") {
      return <NotAvailable isOutsideOperational={false} />;
    } else if (
      !outletDetail?.isActiveAllDay &&
      !outletDetail?.isInOperationalHours
    ) {
      return <NotAvailable isOutsideOperational={true} />;
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
      {isValidUrl &&
        outletDetail?.qrOrderingAvailability !== "InActive" &&
        (outletDetail?.isActiveAllDay || outletDetail?.isInOperationalHours) &&
        cartInfo?.details?.length > 0 && <RenderCartSummary />}
    </Suspense>
  );
}
