import { Suspense, lazy } from "react";
import { useSelector } from "react-redux";
import RenderCartSummary from "../../components/Home/RenderCartSummary";
import { NotAvailable } from "./NotAvailable";

const RenderOrderType = lazy(() => import("./OrderType"));
const MainView = lazy(() => import("./MainVIew"));
const RenderSplashScreen = lazy(() => import("../../components/SplashScreen"));
const RenderValidityError = lazy(
  () => import("../../components/RenderValidityError"),
);

export function Component() {
  const { cartInfo, outletDetail, orderType } = useSelector(
    (state) => state.dataSlicePersisted,
  );
  const { isValidUrl, isSplashScreenShow } = useSelector(
    (state) => state.dataSlice,
  );

  const renderContent = () => {
    if (!isValidUrl) {
      return <RenderValidityError />;
    } else if (isSplashScreenShow) {
      return <RenderSplashScreen />;
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
        cartInfo?.details?.length > 0 && <RenderCartSummary />}
    </Suspense>
  );
}
