import PropTypes from "prop-types";
import { FormInput } from "../FormInput/FormInput";

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
      <FormInput 
        setField={setMobileField}
        type={"phoneOption"}
        i18nKey={"phone_number"}  
      />
    </div>
  );
};
RenderMobileLogin.propTypes = {
  setMobileField: PropTypes.func
};