import PropTypes from "prop-types";
import React from "react";
import { FormInput } from "../FormInput/FormInput";

export const RenderMobileRegister = ({ setNameField, setMobileField }) => {
  return (
    <React.Fragment>
      <FormInput 
        setField={setMobileField}
        type={"phoneOption"}
        i18nKey={"phone_number"}  
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

RenderMobileRegister.propTypes = {
  setNameField: PropTypes.func,
  setMobileField: PropTypes.func,
};
