import PropTypes from "prop-types";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { RenderLoginComponent } from "./Login";
import { apiMemberships } from "../../../services/Memberships";
import { setOtpRequestInfo } from "../../../app/dataSlicePersisted";
import { RenderRegisterComponent } from "./Register";

export const RenderMainAuth = ({ setIsOpenModal, setIsOpenModalOtp, changeOpenModalAuth, authScreen }) => {
  const dispatch = useDispatch();
  const [isChecked, setIsChecked] = useState(false);
  const [emailField, setEmailField] = useState("");
  const [mobileField, setMobileField] = useState("");
  const [nameField, setNameField] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };
  const [tabScreen, setTabScreen] = useState("mobile");

  const isCanProcess = () => {
    return (tabScreen == "email"?validateEmail():mobileField!="") && isChecked;
  };
  
  const doSubmit = async(body) => {
    if(isLoading) return;
    try {
      setIsLoading(true);
      let apiPath = authScreen=="Login"?"Login":"Register";
      const result = await apiMemberships('POST', apiPath, body);
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
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
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
    body.nameToAppear = nameField
    doSubmit(body);
  };

  return (
    <div>
      {authScreen=="Login"
        ?<RenderLoginComponent
          isLoading={isLoading}
          setIsChecked={setIsChecked}
          tabScreen={tabScreen}
          setTabScreen={setTabScreen}
          setMobileField={setMobileField}
          setEmailField={setEmailField}
          errMsg={errMsg}
          isChecked={isChecked}
          handleCheckboxChange={handleCheckboxChange}
          isCanProcess={isCanProcess}
          handleButtonClick={handleButtonClick}
          changeOpenModalAuth={changeOpenModalAuth} 
        />
        :<RenderRegisterComponent
          isLoading={isLoading}
          setIsChecked={setIsChecked}
          tabScreen={tabScreen}
          setTabScreen={setTabScreen}
          setMobileField={setMobileField}
          setEmailField={setEmailField}
          setNameField={setNameField}
          errMsg={errMsg}
          isChecked={isChecked}
          handleCheckboxChange={handleCheckboxChange}
          isCanProcess={isCanProcess}
          handleButtonClick={handleButtonClick}
          changeOpenModalAuth={changeOpenModalAuth} 
        />}
    </div>
  );
};

RenderMainAuth.propTypes = {
  setIsOpenModal: PropTypes.func,
  setIsOpenModalOtp: PropTypes.func,
  changeOpenModalAuth: PropTypes.func,
  authScreen: PropTypes.string
}