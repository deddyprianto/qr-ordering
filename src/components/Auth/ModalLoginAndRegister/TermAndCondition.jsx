import PropTypes from "prop-types";

export const RenderTermAndCondition = ({ isChecked, handleCheckboxChange }) => {
    return (
      <div
        style={{
          alignItems: "start",
          alignSelf: "stretch",
          display: "flex",
          gap: "10px",
          marginTop: "16px",
        }}
      >
        <input
          type="checkbox"
          style={{
            width: "20px",
            height: "20px",
          }}
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <div
          style={{
            color: "var(--text-color-quaternary, #00524C)",
            letterSpacing: "0.28px",
            textDecorationLine: "underline",
            alignSelf: "stretch",
            flexGrow: "1",
            flexBasis: "auto",
            font: "500 14px/20px Helvetica Neue, sans-serif ",
          }}
        >
          <span style={{ color: "rgba(52,58,74,1" }}>I agree to IPSUM </span>
          <span style={{ color: "rgba(0,82,76,1)" }}>Terms and Conditions </span>
          <span style={{ color: "rgba(52,58,74,1" }}>and </span>
          <span style={{ color: "rgba(0,82,76,1)" }}>Privacy Policy</span>
        </div>
      </div>
    );
  };
  RenderTermAndCondition.propTypes = {
    isChecked: PropTypes.bool,
    handleCheckboxChange: PropTypes.func,
  };