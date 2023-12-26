import { useState } from "react";
import { ModalAuth } from "../components/Auth";

export function Component() {
  const [isOpenModalAuth, setIsOpenModalAuth] = useState(false);
  const [authScreen, setAuthScreen] = useState('Login');
  const [isOpenModalOtp, setIsOpenModalOtp] = useState(true);

  const handleSuccessOTP = (isSuccess) => {
    // Replace this function with logic if member success login or register
    return isSuccess
  };
  
  return (
    <div>
      <h1>Cart</h1>
      <ModalAuth
        isOpenModal={isOpenModalAuth}
        setIsOpenModal={setIsOpenModalAuth}
        authScreen={authScreen}
        setAuthScreen={setAuthScreen}
        isOpenModalOtp={isOpenModalOtp}
        setIsOpenModalOtp={setIsOpenModalOtp}
        callback={handleSuccessOTP}
      />
    </div>);
}
