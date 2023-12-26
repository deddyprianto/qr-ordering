import PropTypes from "prop-types";
import { RenderTab } from "../Tab"
import { RenderTabLoginContainer } from "./TabLoginContainer"

export const RenderForm = ({ 
  setIsChecked, 
  tabScreen, 
  setTabScreen, 
  setMobileField, 
  setEmailField
}) => {
  return(
    <div> 
      <RenderTab
        setIsChecked={setIsChecked}
        tabScreen={tabScreen}
        setTabScreen={setTabScreen}
      />
      <RenderTabLoginContainer 
        tabScreen={tabScreen}
        setMobileField={setMobileField}
        setEmailField={setEmailField}
      />
    </div>   
  )
}

RenderForm.propTypes = {
  setIsChecked: PropTypes.bool,
  tabScreen: PropTypes.string,
  setTabScreen: PropTypes.func,
  setMobileField: PropTypes.func,
  setEmailField: PropTypes.func
}