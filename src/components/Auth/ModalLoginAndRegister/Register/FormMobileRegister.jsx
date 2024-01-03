import PropTypes from "prop-types";
import React from "react";
import { FormMobile } from "../FormInput/FormMobile";
import { FormName } from "../FormInput/FormName";

export const RenderMobileRegister = ({ setNameField, setMobileField }) => {
  return (
    <React.Fragment>
      <FormMobile setMobileField={setMobileField}/>
      <FormName setNameField={setNameField}/>
    </React.Fragment>
  );
};

RenderMobileRegister.propTypes = {
  setNameField: PropTypes.func,
  setMobileField: PropTypes.func,
};
