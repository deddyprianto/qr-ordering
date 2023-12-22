import PropTypes from "prop-types";
import { RenderInputFieldCustom } from "../../../InputFieldCustom";

export const RenderEmailLogin = ({ setEmailField }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "start",
        flexDirection: "column",
        marginTop: "16px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "start",
          gap: "4px",
          padding: "0px",
        }}
      >
        <div
          style={{
            font: "500 14px/20px Helvetica Neue, sans-serif ",
            color: "var(--text-color-primary, #343A4A)",
            letterSpacing: "0.28px",
            whiteSpace: "nowrap",
          }}
        >
          Email
        </div>
        <renderFlagMandatory />
      </div>
      <RenderInputFieldCustom
          label={"Email"}
          type={"email"}
          setField={setEmailField}
      />
    </div>
  );
};
RenderEmailLogin.propTypes = {
  setEmailField: PropTypes.func.isRequired,
  pathname: PropTypes.string.isRequired,
  setNameField: PropTypes.string
};