import PropTypes from "prop-types";
import { RenderTab } from "../Tab"
import { RenderTabRegisterContainer } from "./TabRegisterContainer";

export const RenderForm = ({ 
  setIsChecked, 
  tabScreen, 
  setTabScreen, 
  setMobileField, 
  setEmailField,
  setNameField
}) => {
  return(
    <div> 
      <RenderTab
        setIsChecked={setIsChecked}
        tabScreen={tabScreen}
        setTabScreen={setTabScreen}
      />
      <RenderTabRegisterContainer 
        tabScreen={tabScreen}
        setMobileField={setMobileField}
        setEmailField={setEmailField}
        setNameField={setNameField}
      />
    </div>   
  )
}

RenderForm.propTypes = {
  setIsChecked: PropTypes.bool,
  tabScreen: PropTypes.string,
  setTabScreen: PropTypes.func,
  setMobileField: PropTypes.func,
  setEmailField: PropTypes.func,
  setNameField: PropTypes.func
}