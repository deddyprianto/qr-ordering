import { useState } from "react";
import { ModalAuth } from "../../components/Auth";
import { useSelector } from "react-redux";
import { PaymentMethod } from "./PaymentMethod";
import { PriceSummary } from "./PriceSummary";
import FooterCart from "./FooterCart";
import ItemCart from "./ItemCart";
import { Trans } from "react-i18next";

export function Component() {
  const cartInfo = useSelector((state) => state.dataSlicePersisted.cartInfo);
  const [isCartEmpty, setIsCartEmpty] = useState(false);
  const { theme } = useSelector((state) => state.dataSlice);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");
  const [isOpenModalAuth, setIsOpenModalAuth] = useState(false);
  const [authScreen, setAuthScreen] = useState("Login");
  const [isOpenModalOtp, setIsOpenModalOtp] = useState(false);
  const handleSuccessOTP = (isSuccess) => {
    // Replace this function with logic if member success login or register
    return isSuccess;
  };

  const totalQuantityCart = cartInfo?.details.reduce(
    (accumulator, currentValue) => {
      return accumulator + currentValue.quantity;
    },
    0,
  );

  return (
    <>
      <div className="px-[16px]" style={{ paddingBottom: 80 }}>
        <h1><Trans i18nKey={"you_order_from"}/></h1>
        <p style={{ color: theme.secondary }}>{`{company_name @ outlet_name}`}</p>
        <hr
          style={{
            margin: "24px 0px",
            width: "100%",
            borderTop: "1px solid #D6D6D6",
          }}
        />
        <div className="flex justify-between items-center w-full">
          <div><Trans i18nKey={"order_items"}/></div>
          <div>{totalQuantityCart} Items</div>
        </div>
        {cartInfo?.details?.map((item) => {
          return (
            <ItemCart
              item={item}
              idCart={cartInfo?.uniqueID}
              key={item?.uniqueID}
              setIsCartEmpty={setIsCartEmpty}
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
        <PaymentMethod
          selectedPaymentMethod={selectedPaymentMethod}
          setSelectedPaymentMethod={setSelectedPaymentMethod}
        />
        <hr
          style={{
            margin: "24px 0px",
            width: "100%",
            borderTop: "1px solid #D6D6D6",
          }}
        />
        <PriceSummary />
        <FooterCart />
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
    </>
  );
}
