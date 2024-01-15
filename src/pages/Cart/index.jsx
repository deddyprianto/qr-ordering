import { useState } from "react";
import { ModalAuth } from "../../components/Auth";
import { useSelector } from "react-redux";
import { PaymentMethod } from "./PaymentMethod";
import { PriceSummary } from "./PriceSummary";
import FooterCart from "./FooterCart";
import ItemCart from "./ItemCart";

export function Component() {
  const cartInfo = useSelector((state) => state.dataSlicePersisted.cartInfo);
  const { theme } = useSelector((state) => state.dataSlice);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");
  const [isOpenModalAuth, setIsOpenModalAuth] = useState(false);
  const [authScreen, setAuthScreen] = useState("Login");
  const [isOpenModalOtp, setIsOpenModalOtp] = useState(false);

  const handleSuccessOTP = (isSuccess) => {
    // Replace this function with logic if member success login or register
    return isSuccess;
  };

  return (
    <div className="px-[16px]" style={{ paddingBottom: 80 }}>
      <h1>You are ordering from</h1>
      <p style={{ color: theme.secondary }}>Chicky Fun @ Fusionopolis</p>
      <hr
        style={{
          margin: "24px 0px",
          width: "100%",
          borderTop: "1px solid #D6D6D6",
        }}
      />
      <div className="flex justify-between items-center w-full">
        <div>Order item(s)</div>
        <div>{cartInfo?.details?.length} Items</div>
      </div>
      {cartInfo?.details?.map((item) => {
        return <ItemCart item={item} key={item?.uniqueID} />;
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
  );
}
