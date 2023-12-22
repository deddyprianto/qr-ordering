import PropTypes from "prop-types";
import { RenderEmailLogin } from "./FormEmailLogin";
import { RenderMobileLogin } from "./FormMobileLogin";

export const RenderTabLoginContainer = ({ tabScreen, pathname, setMobileField, setEmailField }) => {
  if (tabScreen === "mobile") {
    return (
      <RenderMobileLogin
        pathname={pathname} 
        setMobileField={setMobileField}  />
    );
  } else {
    return (
      <RenderEmailLogin
        pathname={pathname}
        setEmailField={setEmailField}
      />
    );
  }
};
RenderTabLoginContainer.propTypes = {
  tabScreen: PropTypes.string.isRequired,
  pathname: PropTypes.string.isRequired,
  setMobileField: PropTypes.func.isRequired,
  setEmailField: PropTypes.func.isRequired,
};