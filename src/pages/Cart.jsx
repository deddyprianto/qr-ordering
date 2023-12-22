import { useState } from "react";
import { ModalAuth } from "../components/Auth/ModalAuth";

export function Component() {
  const [isOpenModalLogin, setIsOpenModalLogin] = useState(true);
  const [isOpenModalRegister, setIsOpenModalRegister] = useState(false);
  const [isOpenModalOtp, setIsOpenModalOtp] = useState(false);

  const handleSuccessOTP = (isSuccess) => {
    // Replace this function with logic if member success login or register
    return isSuccess
  };
  
  return (
    <div>
      <h1>Cart</h1>
      <ModalAuth
        isOpenModalLogin={isOpenModalLogin}
        setIsOpenModalLogin={setIsOpenModalLogin}
        isOpenModalRegister={isOpenModalRegister}
        setIsOpenModalRegister={setIsOpenModalRegister}
        isOpenModalOtp={isOpenModalOtp}
        setIsOpenModalOtp={setIsOpenModalOtp}
        callback={handleSuccessOTP}
      />
    </div>);
}
