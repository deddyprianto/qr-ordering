import PropTypes from "prop-types";
import { RenderMobileRegister } from "./FormMobile";
import { RenderEmailRegister } from "./FormEmail";

export const RenderTabContainer = (tabScreen, pathname, setMobileField, setEmailField) => {
  if (tabScreen === "mobile") {
    return (
      <RenderMobileRegister
        pathname={pathname} 
        setMobileField={setMobileField}  />
    );
  } else {
    return (
      <RenderEmailRegister
        pathname={pathname}
        setEmailField={setEmailField}
      />
    );
  }
};
RenderTabContainer.propTypes = {
  tabScreen: PropTypes.string.isRequired
};