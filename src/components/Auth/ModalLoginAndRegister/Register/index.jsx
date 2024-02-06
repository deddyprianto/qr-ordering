import PropTypes from "prop-types";
import { RenderTopLabel } from "../TopLabel";
import { useDispatch, useSelector } from "react-redux";
import { RenderButtonSocialMedia } from "../SocialMedia";
import { RenderDivider } from "../Devider";
import { RenderTermAndCondition } from "../TermAndCondition";
import { RenderButton } from "../ActionButton";
import { RenderLabelGuestCO } from "../LebelGustCO";
import { RenderForm } from "./Form";
import { ParentBlur } from "../../../ParentBlur";

export const RenderRegisterComponent = ({ 
  isLoading,
  setIsChecked,
  tabScreen,
  setTabScreen,
  setMobileField,
  setEmailField,
  setNameField,
  errMsg,
  isChecked,
  handleCheckboxChange,
  isCanProcess,
  handleButtonClick,
  changeOpenModalAuth 
 }) => {
  const dispatch = useDispatch();
  const { outletDetail } = useSelector((state)=>state.dataSlicePersisted)
  
  return (
    <div style={{ padding: "16px" }}>
      <RenderTopLabel
        dispatchAction={dispatch}
        label={`Welcome to ${outletDetail.companyName}!`}
        subLabel="Access this cart page by selecting Register, Log In, or Continue as a Guest."
      />
      {isLoading && <ParentBlur/>}
      <RenderButtonSocialMedia />
      <RenderDivider />
      <RenderForm 
        setIsChecked={setIsChecked} 
        tabScreen={tabScreen} 
        setTabScreen={setTabScreen} 
        setMobileField={setMobileField} 
        setEmailField={setEmailField}
        setNameField={setNameField}
      />
      {errMsg!="" && <div className="mt-2 text-xs text-red-500">{errMsg}</div>}
      <RenderTermAndCondition
        isChecked={isChecked}
        handleCheckboxChange={handleCheckboxChange}
      />
      <RenderButton
        label="Register"
        isCanProcess={isCanProcess}
        changeOpenModalAuth={changeOpenModalAuth}
        labelAccount="Already have account?"
        labelRegLog="Login"
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

RenderRegisterComponent.propTypes = {
  isLoading: PropTypes.bool,
  setIsChecked: PropTypes.func,
  tabScreen: PropTypes.string,
  setTabScreen: PropTypes.func,
  setMobileField: PropTypes.func,
  setEmailField:  PropTypes.func,
  setNameField:  PropTypes.func,
  errMsg: PropTypes.string,
  isChecked: PropTypes.bool,
  handleCheckboxChange: PropTypes.func,
  isCanProcess: PropTypes.func,
  handleButtonClick: PropTypes.func,
  changeOpenModalAuth: PropTypes.func
}