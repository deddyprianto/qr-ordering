import { ModalLogin } from "../components/Auth/ModalLoginAndRegister/ModalLogin";
import { useState } from "react";
import { ModalOtp } from "../components/Auth/ModalOTP/Index";

export function Component() {
  const [isOpenModalLogin, setIsOpenModalLogin] = useState(true);
  const [isOpenModalOtp, setIsOpenModalOtp] = useState(false);
  
  return (
    <div>
      <h1>Cart</h1>
      <ModalLogin  isOpenModal={isOpenModalLogin} setIsOpenModal={setIsOpenModalLogin} setIsOpenModalOtp={setIsOpenModalOtp}/>
      <ModalOtp  isOpenModal={isOpenModalOtp} setIsOpenModal={setIsOpenModalOtp} callback={()=>{}}/>
    </div>);
}
