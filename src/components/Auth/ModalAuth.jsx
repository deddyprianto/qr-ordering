import PropTypes from "prop-types";
import { ModalLogin } from "./ModalLoginAndRegister/ModalLogin";
import { ModalRegister } from "./ModalLoginAndRegister/ModalRegister";
import { ModalOtp } from "./ModalOTP/Index";

export const ModalAuth = ({
  isOpenModalLogin,
  setIsOpenModalLogin,
  isOpenModalRegister,
  setIsOpenModalRegister,
  isOpenModalOtp,
  setIsOpenModalOtp,
  callback
}) => {
  return (
    <div>
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
        callback={callback}/>
    </div>
  )
};

ModalAuth.propTypes = {
  isOpenModalLogin: PropTypes.bool,
  setIsOpenModalLogin: PropTypes.func,
  isOpenModalRegister: PropTypes.bool,
  setIsOpenModalRegister: PropTypes.func,
  isOpenModalOtp: PropTypes.bool,
  setIsOpenModalOtp: PropTypes.func,
  callback: PropTypes.func
};