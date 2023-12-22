import PropTypes from "prop-types";
import { ModalOtp } from "./ModalOTP";
import { ModalLoginAndRegister } from "./ModalLoginAndRegister";

export const ModalAuth = ({
  isOpenModal,
  setIsOpenModal,
  authScreen,
  setAuthScreen,
  isOpenModalOtp,
  setIsOpenModalOtp,
  callback
}) => {
  const changeOpenModalAuth = () => {
    setAuthScreen(authScreen=="Login"?"Register":"Login");
  };

  return (
    <div>
      <ModalLoginAndRegister  
        isOpenModal={isOpenModal} 
        setIsOpenModal={setIsOpenModal} 
        setIsOpenModalOtp={setIsOpenModalOtp}
        changeOpenModalAuth={changeOpenModalAuth}
        authScreen={authScreen}/>
      <ModalOtp  
        isOpenModalOtp={isOpenModalOtp} 
        setIsOpenModalOtp={setIsOpenModalOtp} 
        callback={callback}/>
    </div>
  )
};

ModalAuth.propTypes = {
  isOpenModal: PropTypes.bool,
  setIsOpenModal: PropTypes.func,
  authScreen: PropTypes.bool,
  setAuthScreen: PropTypes.func,
  isOpenModalOtp: PropTypes.bool,
  setIsOpenModalOtp: PropTypes.func,
  callback: PropTypes.func
};