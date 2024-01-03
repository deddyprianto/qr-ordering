import PropTypes from "prop-types";
import { FormEmail } from "../FormInput/FormEmail";

export const RenderEmailLogin = ({ setEmailField }) => {
  return (
    <FormEmail setEmailField={setEmailField}/>
  );
};
RenderEmailLogin.propTypes = {
  setEmailField: PropTypes.func.isRequired
};