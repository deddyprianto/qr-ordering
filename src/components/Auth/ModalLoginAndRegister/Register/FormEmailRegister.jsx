import PropTypes from "prop-types";
import React from "react";
import { FormInput } from "../FormInput/FormInput";

export const RenderEmailRegister = ({ setEmailField, setNameField }) => {
  
  return (
    <React.Fragment>
      <FormInput 
        setField={setEmailField}
        label={"Email"}
        type={"text"}
        i18nKey={"email"}  
      />
      <FormInput 
        setField={setNameField}
        label={"Name"}
        type={"text"}
        i18nKey={"name"}  
      />
    </React.Fragment>
  );
};
RenderEmailRegister.propTypes = {
  setEmailField: PropTypes.func.isRequired,
  setNameField: PropTypes.string
};