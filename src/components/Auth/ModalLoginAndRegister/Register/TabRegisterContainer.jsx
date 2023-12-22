import PropTypes from "prop-types";
import { RenderMobileRegister } from "./FormMobileRegister";
import { RenderEmailRegister } from "./FormEmailRegister";

export const RenderTabRegisterContainer = ({ tabScreen, setMobileField, setEmailField, setNameField }) => {
  if (tabScreen === "mobile") {
    return (
      <RenderMobileRegister
        setMobileField={setMobileField}
        setNameField={setNameField}  />
    );
  } else {
    return (
      <RenderEmailRegister
        setEmailField={setEmailField}
        setNameField={setNameField}
      />
    );
  }
};
RenderTabRegisterContainer.propTypes = {
  tabScreen: PropTypes.string.isRequired,
  setMobileField: PropTypes.func.isRequired,
  setEmailField: PropTypes.func.isRequired,
  setNameField: PropTypes.func.isRequired
};