import PropTypes from "prop-types";

const RenderLabel = ({ label = "", subLabel = "" }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "16px 0px",
      }}
    >
      <div
        style={{
          color: "var(--text-color-primary, #343A4A)",
          width: "100%",
          font: "700 22px/31px Helvetica Neue, sans-serif ",
        }}
      >
        {label}
      </div>
      <div
        style={{
          color: "#000",
          letterSpacing: "0.28px",
          marginTop: "4px",
          width: "100%",
          font: "500 14px/20px Helvetica Neue, sans-serif ",
        }}
      >
        {subLabel}
      </div>
    </div>
  );
};
RenderLabel.propTypes = {
  label: PropTypes.string,
  subLabel: PropTypes.string,
};

export default RenderLabel;
