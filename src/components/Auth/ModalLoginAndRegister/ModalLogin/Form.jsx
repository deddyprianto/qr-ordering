import PropTypes from "prop-types";
import { RenderTab } from "../Tab"
import { RenderTabContainer } from "../TabContainer"

export const RenderForm = ({ 
  setIsChecked, 
  tabScreen, 
  setTabScreen, 
  pathname, 
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
      <RenderTabContainer 
        tabScreen={tabScreen}
        pathname={pathname}
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
  pathname: PropTypes.string,
  setMobileField: PropTypes.func,
  setEmailField: PropTypes.func
}