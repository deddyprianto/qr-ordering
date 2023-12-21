import { useRef, useState } from "react";
import { TopLabel } from "./TopLabel";
import { RenderFormOTP } from "./FormOtp";
import { ButtomLabel } from "./ButtonLabel";
import { ActionButton } from "./ActionButton";
import PropTypes from "prop-types";

export const RenderMainComponent = ({ callback }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [otp, setOTP] = useState(["", "", "", "", "", ""]);
  const refs = [useRef(), useRef(), useRef(), useRef(), useRef(), useRef()];
  const [errMsg, setErrMsg] = useState("");

  // Check if all OTP fields are filled
  const isOTPComplete = otp.every((value) => value !== "");

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "16px",
      }}
    >
      {/* {isLoading && <ParentBlur/>} */}
      <TopLabel />
      <RenderFormOTP
        otp={otp}
        setOTP={setOTP}
        refs={refs}
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
  callback: PropTypes.func
}