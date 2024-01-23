import { useEffect, useRef, useState } from "react";
import { TopLabel } from "./TopLabel";
import { RenderFormOTP } from "./FormOtp";
import { ButtomLabel } from "./ButtonLabel";
import { ActionButton } from "./ActionButton";
import PropTypes from "prop-types";
import { ParentBlur } from "../../ParentBlur";

export const RenderMainComponent = ({ callback, isOpenModal, setIsOpenModal }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [otp, setOTP] = useState([
    {id: 1, value:"", ref: useRef()},
    {id: 2, value:"", ref: useRef()},
    {id: 3, value:"", ref: useRef()},
    {id: 4, value:"", ref: useRef()},
    {id: 5, value:"", ref: useRef()},
    {id: 6, value:"", ref: useRef()}]);
  const [errMsg, setErrMsg] = useState("");

  // Check if all OTP fields are filled
  const isOTPComplete = otp.every((value) => value != "");
  const firstOtpRef = otp[0]?.ref;

  useEffect(() => {
    if(isOpenModal){
      firstOtpRef?.current?.focus();
    }
  }, [isOpenModal, firstOtpRef]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "16px",
      }}
    >
      {isLoading && <ParentBlur/>}
      <TopLabel setIsOpenModal={setIsOpenModal}/>
      <RenderFormOTP
        otp={otp}
        setOTP={setOTP}
        disableForm={isLoading}
      />
      <ButtomLabel />
      {errMsg!="" && <div className="mt-2 text-xs text-red-500">{errMsg}</div>}
      <ActionButton
        otp={otp}
        isOTPComplete={isOTPComplete}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        setErrMsg={setErrMsg}
        callback={callback}
      />
    </div>
  );
};

RenderMainComponent.propTypes = {
  callback: PropTypes.func,
  isOpenModal: PropTypes.bool,
  setIsOpenModal: PropTypes.func
}