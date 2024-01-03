import PropTypes from "prop-types";
import { FormInput } from "../FormInput/FormInput";

export const RenderEmailLogin = ({ setEmailField }) => {
  return (
    <FormInput 
      setField={setEmailField}
      label={"Email"}
      type={"input"}
      i18nKey={"email"}  
    />
  );
};
RenderEmailLogin.propTypes = {
  setEmailField: PropTypes.func.isRequired
};