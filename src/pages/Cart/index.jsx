import { Suspense, lazy, useState, useEffect } from "react";
import { ModalAuth } from "../../components/Auth";
import { useSelector } from "react-redux";
import { Trans } from "react-i18next";
import { ModalGeneral } from "../../components/ModalGeneral";
import { LazyLoadComponent } from "react-lazy-load-image-component";
import { SkeletonList } from "../../components/Skeleton/SkeletonPaymentList";
import { useUpdateURLWithQueryParams } from "../../../hooks/usePathCustom";
import { SkeletonPaymentInput } from "../../components/Skeleton/SkeletonPaymentInput";
import { useEdgeSnack } from "../../components/EdgeSnack/utils/useEdgeSnack";

const PaymentMethod = lazy(() => import("./PaymentMethod"));
const PriceSummary = lazy(() => import("./PriceSummary"));
const FooterCart = lazy(() => import("./FooterCart"));
const ItemCart = lazy(() => import("./ItemCart"));
const OrderingMode = lazy(() => import("./OrderingMode"));

export function Component() {
  const toast = useEdgeSnack();
  const updateURL = useUpdateURLWithQueryParams();

  const { cartInfo, outletName } = useSelector(
    (state) => state.dataSlicePersisted,
  );
  const [isCartEmpty, setIsCartEmpty] = useState(false);
  const { theme, outletDetail } = useSelector(
    (state) => state.dataSlicePersisted,
  );
  const [isOpenModalAuth, setIsOpenModalAuth] = useState(false);
  const [isPOSOffline, setIsPOSOffline] = useState(false);
  const [authScreen, setAuthScreen] = useState("Login");
  const [isOpenModalOtp, setIsOpenModalOtp] = useState(false);

  const handleSuccessOTP = (isSuccess) => {
    // Replace this function with logic if member success login or register
    return isSuccess;
  };

  const totalQuantityCart = cartInfo?.details?.reduce(
    (accumulator, currentValue) => {
      return accumulator + currentValue.quantity;
    },
    0,
  );

  useEffect(() => {
    if (totalQuantityCart === 0) {
      updateURL("/");
    }
  }, [totalQuantityCart, updateURL]);

  useEffect(() => {
    const isPOSOnline = outletDetail.posTerminals.find(
      (item) => item.outletName === outletName,
    );
    if (!isPOSOnline?.isOnline) {
      toast.open(`POS terminal on ${outletName} is Offline`, "error");
      setIsPOSOffline(true);
    }
  }, [outletDetail.posTerminals, outletName, toast]);

  return (
    <Suspense fallback={<SkeletonPaymentInput color={theme} />}>
      <div className="px-[16px]" style={{ paddingBottom: 80 }}>
        <h1 className="mt-5" id="labelYouAreOrderFrom">
          <Trans i18nKey={"you_order_from"} />
        </h1>
        <p
          style={{ color: theme?.Color_Secondary }}
        >{`${outletDetail.companyName} @ ${outletName}`}</p>
        <hr
          style={{
            margin: "24px 0px",
            width: "100%",
            borderTop: "1px solid #D6D6D6",
          }}
        />
        <div className="flex justify-between items-center w-full">
          <div>
            <Trans i18nKey={"order_items"} />
          </div>
          <div>{totalQuantityCart} Items</div>
        </div>
        {cartInfo?.details?.map((item) => {
          return (
            <ItemCart
              key={item?.uniqueID}
              item={item}
              idCart={cartInfo?.uniqueID}
              setIsCartEmpty={setIsCartEmpty}
              totalQuantityCart={totalQuantityCart}
            />
          );
        })}
        <hr
          style={{
            margin: "24px 0px",
            width: "100%",
            borderTop: "1px solid #D6D6D6",
          }}
        />
        <OrderingMode />
        <hr
          style={{
            margin: "24px 0px",
            width: "100%",
            borderTop: "1px solid #D6D6D6",
          }}
        />
        <LazyLoadComponent placeholder={<SkeletonList />}>
          <PaymentMethod />
        </LazyLoadComponent>
        <hr
          style={{
            margin: "24px 0px",
            width: "100%",
            borderTop: "1px solid #D6D6D6",
          }}
        />
        <PriceSummary />
        <FooterCart
          isItemExist={cartInfo?.details?.length > 0}
          isPOSOffline={isPOSOffline}
        />
        <ModalGeneral />
        <ModalAuth
          isOpenModal={isOpenModalAuth}
          setIsOpenModal={setIsOpenModalAuth}
          authScreen={authScreen}
          setAuthScreen={setAuthScreen}
          isOpenModalOtp={isOpenModalOtp}
          setIsOpenModalOtp={setIsOpenModalOtp}
          callback={handleSuccessOTP}
        />
      </div>
      {isCartEmpty && (
        <div className="absolute inset-0 backdrop-filter backdrop-blur-lg z-0 text-lg text-black flex justify-center items-center">
          <div>Redirect to home page, please wait...</div>
        </div>
      )}
    </Suspense>
  );
}
