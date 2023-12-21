import PropTypes from "prop-types";

export const RenderButton = ({
    isCanProcess,
    navigate,
    label,
    labelAccount,
    labelRegLog,
    path,
    handleButton,
  }) => {
    return (
      <div
        style={{
          alignSelf: "stretch",
          display: "flex",
          flexDirection: "column",
          marginTop: "24px",
        }}
      >
        <button
          onClick={() => handleButton()}
          disabled={!isCanProcess()}
          style={{
            color: "var(--button-color-standby, #FFF)",
            letterSpacing: "0.28px",
            whiteSpace: "nowrap",
            borderRadius: "8px",
            backgroundColor: isCanProcess()
              ?"var(--button-color-active, #E91254)"
              :"#B7B7B7",
            width: "100%",
            padding: "11px 0px",
            font: "500 14px/20px Helvetica Neue, sans-serif ",
            textAlign: "center",
          }}
        >
          {label}
        </button>
        <div
          style={{
            display: "flex",
            marginTop: "16px",
            gap: "8px",
            justifyContent: "center",
            alignItems: "center",
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
            {labelAccount}
          </div>
          <div
            onClick={() => navigate(path)}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                navigate(path);
              }
            }}
            style={{
              color: "var(--text-color-quaternary, #00524C)",
              letterSpacing: "0.28px",
              textDecorationLine: "underline",
              whiteSpace: "nowrap",
              font: "700 14px/20px Helvetica Neue, sans-serif ",
            }}
          >
            {labelRegLog}
          </div>
        </div>
      </div>
    );
  };
  RenderButton.propTypes = {
    isCanProcess: PropTypes.func.isRequired,
    navigate: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
    labelAccount: PropTypes.string.isRequired,
    labelRegLog: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    handleButton: PropTypes.func.isRequired
  };