import PropTypes from "prop-types";
import { RenderTopLabel } from "../TopLabel";
import { useDispatch } from "react-redux";
import { RenderButtonSocialMedia } from "../SocialMedia";
import { RenderDivider } from "../Devider";
import { RenderTermAndCondition } from "../TermAndCondition";
import { RenderButton } from "../ActionButton";
import { RenderLabelGuestCO } from "../LebelGustCO";
import { RenderForm } from "./Form";
import { ParentBlur } from "../../../ParentBlur";

export const RenderLoginComponent = ({ 
  isLoading,
  setIsChecked,
  tabScreen,
  setTabScreen,
  setMobileField,
  setEmailField,
  errMsg,
  isChecked,
  handleCheckboxChange,
  isCanProcess,
  handleButtonClick,
  changeOpenModalAuth 
}) => {
  const dispatch = useDispatch();
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

RenderLoginComponent.propTypes = {
  isLoading: PropTypes.bool,
  setIsChecked: PropTypes.func,
  tabScreen: PropTypes.string,
  setTabScreen: PropTypes.func,
  setMobileField: PropTypes.func,
  setEmailField:  PropTypes.func,
  errMsg: PropTypes.string,
  isChecked: PropTypes.bool,
  handleCheckboxChange: PropTypes.func,
  isCanProcess: PropTypes.func,
  handleButtonClick: PropTypes.func,
  changeOpenModalAuth: PropTypes.func
}