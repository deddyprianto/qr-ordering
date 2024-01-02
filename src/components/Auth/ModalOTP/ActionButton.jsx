import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { apiMemberships } from "../../../services/Memberships";
import { setMemberInfo } from "../../../app/dataSlicePersisted";
import { Trans } from "react-i18next";


export const ActionButton = ({ otp, isOTPComplete, isLoading, setIsLoading, setErrMsg, callback }) => {
  const dispatch = useDispatch();
  const otpRequestInfo = useSelector(
    (state) => state.dataSlicePersisted.otpRequestInfo,
  );

  const handleButtonClick = async() => {
    if(isLoading) return;
    try {
      setIsLoading(true);
      let body = JSON.parse(JSON.stringify(otpRequestInfo));
      body.otp = "";
      for(const otpObj of otp)
        body.otp += otpObj.value;

      const result = await apiMemberships('POST', "ValidateOTP", body);

      if(result.resultCode == 200){
        dispatch(setMemberInfo(result.data));
        if(callback) callback(true);
      }
      else {
        setErrMsg(result.message);
        if(callback) callback(false);
      }
      setIsLoading(false);
    } catch (error) {
      setErrMsg("Invalid OTP. Please enter a valid OTP.");
      if(callback) callback(false);
      setIsLoading(false);
      console.log(error);
    }
  };

  return (
    <button
      onClick={()=>handleButtonClick()}
      style={{
        color: "var(--color-01-white, #F9F9F9)",
        whiteSpace: "nowrap",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "stretch",
        borderRadius: "8px",
        backgroundColor: !isOTPComplete ? "#B7B7B7" : "#FF4782",
        pointerEvents: !isOTPComplete && "none",
        padding: "11px 60px",
        font: "500 14px Poppins, sans-serif ",
        marginTop: "16px",
      }}
    >
      <Trans i18nKey={"verify_and_register"}/>
    </button>
  )
};

ActionButton.propTypes = {
  otp: PropTypes.array,
  isOTPComplete: PropTypes.bool,
  isLoading: PropTypes.bool,
  setIsLoading: PropTypes.bool,
  setErrMsg: PropTypes.func,
  callback: PropTypes.func
};