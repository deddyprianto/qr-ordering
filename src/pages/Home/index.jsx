import { Suspense, lazy, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setOutletName,
  setShowSplashScreen,
} from "../../app/dataSlicePersisted";
import RenderCartSummary from "../../components/Home/RenderCartSummary";
import { NotAvailable } from "./NotAvailable";
import { useLocation } from "react-router-dom";

const RenderOrderType = lazy(() => import("./OrderType"));
const MainView = lazy(() => import("./MainVIew"));
const RenderSplashScreen = lazy(() => import("../../components/SplashScreen"));
const RenderValidityError = lazy(
  () => import("../../components/RenderValidityError"),
);

export function Component() {
  const dispatch = useDispatch();
  const { search } = useLocation();

  const queryParams = new URLSearchParams(search);
  const queryStr = queryParams.get("input");

  const decodeQueryStr = atob(queryStr);
  const decodedParams = new URLSearchParams(decodeQueryStr);

  const outlet = decodedParams.get("outlet");
  const validUntil = decodedParams.get("validUntil");
  const validDate = new Date(parseInt(validUntil));
  const currentDate = new Date();

  const { cartInfo, orderType } = useSelector(
    (state) => state.dataSlicePersisted,
  );
  const { isSplashScreenShow, outletDetail } = useSelector(
    (state) => state.dataSlicePersisted,
  );
  useEffect(() => {
    dispatch(setOutletName(outlet));
  }, [dispatch, outlet]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      dispatch(setShowSplashScreen(false));
    }, 2000);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [dispatch]);

  const renderContent = () => {
    if (validUntil && validDate > currentDate) {
      return <RenderValidityError />;
    } else if (isSplashScreenShow) {
      return <RenderSplashScreen />;
    } else if (!outletDetail?.isQrOrderingAvailable) {
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
      {outletDetail?.isQrOrderingAvailable && cartInfo?.details?.length > 0 && (
        <RenderCartSummary />
      )}
    </Suspense>
  );
}
