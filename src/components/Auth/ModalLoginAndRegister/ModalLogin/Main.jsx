import PropTypes from "prop-types";
import { useState } from "react";
import { RenderTopLabel } from "../TopLabel";
import { useDispatch } from "react-redux";
import { apiMemberships } from "../../../../services/Memberships";
import { setOtpRequestInfo } from "../../../../app/dataSlicePersisted";
import { RenderButtonSocialMedia } from "../SocialMedia";
import { RenderDivider } from "../Devider";
import { RenderTermAndCondition } from "../TermAndCondition";
import { RenderButton } from "../ActionButton";
import { RenderLabelGuestCO } from "../LebelGustCO";
import { RenderForm } from "./Form";
import { ParentBlur } from "../../../ParentBlur";

export const RenderMainComponent = ({ setIsOpenModal, setIsOpenModalOtp, changeOpenModalAuth }) => {
  const dispatch = useDispatch();
  const [isChecked, setIsChecked] = useState(false);
  const [emailField, setEmailField] = useState("");
  const [mobileField, setMobileField] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };
  const [tabScreen, setTabScreen] = useState("mobile");

  const isCanProcess = () => {
    return (tabScreen == "email"?validateEmail():mobileField!="") && isChecked;
  };
  
  const doLogin = async(body) => {
    if(isLoading) return;
    try {
      setIsLoading(true);
      const result = await apiMemberships('POST', "Login", body);

      if(result.resultCode == 200){
        dispatch(setOtpRequestInfo(result.data?.otpRequestInfo));
        setIsOpenModal(false);
        setIsOpenModalOtp(true);
      }
      else setErrMsg(result.message);
      setIsLoading(false);
    } catch (error) {
      setErrMsg("Login failed. Please check your credentials.");
      setIsLoading(false);
      console.log(error);
    }
  };

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(emailField);
  };

  const handleButtonClick = () => {
    let body = {};
    if(tabScreen == "email"){
      if(!validateEmail()) {
        setErrMsg("Email is not valid");
        return;
      }
      setErrMsg("");
      body.email = emailField;
    }
    else body.mobile = mobileField
    doLogin(body);
  };


  return (
    <div style={{ padding: "16px" }}>
      {isLoading && <ParentBlur/>}
      <RenderTopLabel
        dispatchAction={dispatch}
        label="Welcome to CHICKY FUN!"
        subLabel="Access this cart page by selecting Register, Log In, or Continue as a Guest."
      />
      <RenderButtonSocialMedia />
      <RenderDivider />
      <RenderForm 
        setIsChecked={setIsChecked} 
        tabScreen={tabScreen} 
        setTabScreen={setTabScreen} 
        setMobileField={setMobileField} 
        setEmailField={setEmailField}
      />
      {errMsg!="" && <div className="mt-2 text-xs text-red-500">{errMsg}</div>}
      <RenderTermAndCondition
        isChecked={isChecked}
        handleCheckboxChange={handleCheckboxChange}
      />
      <RenderButton
        isCanProcess={isCanProcess}
        changeOpenModalAuth={changeOpenModalAuth}
        label="Login"
        labelAccount="Don’t have account?"
        labelRegLog="Register"
        handleButton={handleButtonClick}
      />
      <hr
        style={{
          marginTop: "24px",
          width: "100%",
          borderTop: "1px solid #D6D6D6",
        }}
      />
      <RenderLabelGuestCO />
    </div>
  );
};

RenderMainComponent.propTypes = {
  setIsOpenModal: PropTypes.func,
  setIsOpenModalOtp: PropTypes.func,
  changeOpenModalAuth: PropTypes.func
}