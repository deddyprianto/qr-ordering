import PropTypes from "prop-types";
import { RenderInputFieldCustom } from "../../../InputFieldCustom";
import { Trans } from "react-i18next";
import { FormEmail } from "../FormInput/FormEmail";

export const RenderEmailLogin = ({ setEmailField }) => {
  return (
    <FormEmail setEmailField={setEmailField}/>
  );
};
RenderEmailLogin.propTypes = {
  setEmailField: PropTypes.func.isRequired
};