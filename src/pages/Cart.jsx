import { ModalLogin } from "../components/Auth/ModalLoginAndRegister/ModalLogin";
import { useState } from "react";
import { ModalOtp } from "../components/Auth/ModalOTP/Index";
import { ModalRegister } from "../components/Auth/ModalLoginAndRegister/ModalRegister";

export function Component() {
  const [isOpenModalLogin, setIsOpenModalLogin] = useState(false);
  const [isOpenModalRegister, setIsOpenModalRegister] = useState(false);
  const [isOpenModalOtp, setIsOpenModalOtp] = useState(true);
  
  return (
    <div>
      <h1>Cart</h1>
      <ModalLogin  
        isOpenModal={isOpenModalLogin} 
        setIsOpenModal={setIsOpenModalLogin} 
        setIsOpenModalOtp={setIsOpenModalOtp}/>
      <ModalRegister  
        isOpenModal={isOpenModalRegister} 
        setIsOpenModal={setIsOpenModalRegister} 
        setIsOpenModalOtp={setIsOpenModalOtp}/>
      <ModalOtp  
        isOpenModal={isOpenModalOtp} 
        setIsOpenModal={setIsOpenModalOtp} 
        callback={()=>{}}/>
    </div>);
}
