import PropTypes from "prop-types";
import { RenderFlagMandatory } from "../../../FlagMandatory";
import { Trans } from "react-i18next";
import PhoneDropdown from "../PhoneDropdown";

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
      <div
        style={{
          alignItems: "start",
          display: "flex",
          gap: "4px",
          padding: "0px",
        }}
      >
        <div
          style={{
            color: "var(--text-color-primary, #343A4A)",
            letterSpacing: "0.28px",
            whiteSpace: "nowrap",
            font: "500 14px/20px Helvetica Neue, sans-serif ",
          }}
        >
          <Trans i18nKey={"phone_number"}/>
        </div>
        <RenderFlagMandatory/>
      </div>
      <div
        style={{
          alignItems: "start",
          alignSelf: "stretch",
          borderRadius: "8px",
          border: "1px solid var(--text-color-tertiary, #888787)",
          boxShadow: "0px 0px 0px 3px rgba(159, 135, 255, 0.20)",
          backgroundColor: "var(--brand-color-secondary, #FFF)",
          display: "flex",
          marginTop: "4px",
          width: "100%",
          flexDirection: "column",
          justifyContent: "center",
          padding: "12px 60px 12px 16px",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "10px",
            position: "relative",
            width: "100%",
          }}
        >
          <PhoneDropdown />
          <input
            onChange={(e) => setMobileField(e.target.value)}
            style={{
              outline: "none",
              width: "100%",
              font: "500 14px/20px Helvetica Neue, sans-serif ",
            }}
            type="number"
            placeholder="Enter your phone number"
          />
        </div>
      </div>
    </div>
  );
};
RenderMobileLogin.propTypes = {
  setMobileField: PropTypes.func
};