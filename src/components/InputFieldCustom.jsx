import PropTypes from "prop-types";

export const RenderInputFieldCustom = ({ label, type, setField }) => {
  return (
    <div
      style={{
        color: "var(--text-color-tertiary, #888787)",
        whiteSpace: "nowrap",
        alignItems: "start",
        alignSelf: "stretch",
        borderRadius: "8px",
        border: "1px solid var(--text-color-tertiary, #888787)",
        boxShadow: "0px 0px 0px 3px rgba(159, 135, 255, 0.20)",
        backgroundColor: "var(--brand-color-secondary, #FFF)",
        marginTop: "4px",
        width: "100%",
        justifyContent: "center",
        padding: "14px 60px 14px 16px",
        font: "500 14px Poppins, sans-serif ",
      }}
    >
      <input
        onChange={(e) => setField(e.target.value)}
        style={{
          outline: "none",
          width: "100%",
          font: "500 14px/20px Helvetica Neue, sans-serif ",
        }}
        type={type === "email" ? "email" : "text"}
        placeholder={`Enter your ${label}`}
      />
    </div>
  );
};

RenderInputFieldCustom.propTypes = {
  label: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  setField: PropTypes.string
};