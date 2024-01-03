import PropTypes from "prop-types";
import { FormMobile } from "../FormInput/FormMobile";

export const RenderMobileLogin = ({ setMobileField }) => {
  return (
    <div
      style={{
        alignItems: "start",
        alignSelf: "stretch",
        display: "flex",
        flexDirection: "column",
        marginTop: "16px",
      }}
    >
      <FormMobile setMobileField={setMobileField}/>
    </div>
  );
};
RenderMobileLogin.propTypes = {
  setMobileField: PropTypes.func
};