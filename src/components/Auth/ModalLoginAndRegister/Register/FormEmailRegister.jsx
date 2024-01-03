import PropTypes from "prop-types";
import React from "react";
import { FormEmail } from "../FormInput/FormEmail";
import { FormName } from "../FormInput/FormName";

export const RenderEmailRegister = ({ setEmailField, setNameField }) => {
  
  return (
    <React.Fragment>
      <FormEmail setEmailField={setEmailField}/>
      <FormName setNameField={setNameField}/>
    </React.Fragment>
  );
};
RenderEmailRegister.propTypes = {
  setEmailField: PropTypes.func.isRequired,
  setNameField: PropTypes.string
};