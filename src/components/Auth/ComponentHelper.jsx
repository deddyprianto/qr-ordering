import React from "react";
import DropDown from "./DropDown";
import PropTypes from "prop-types";


const renderFlagMandatory = () => {
  return (
    <div
      style={{
        color: "var(--badge-color-badge, #CE1111)",
        alignSelf: "stretch",
        whiteSpace: "nowrap",
        font: "500 14px Poppins, sans-serif ",
      }}
    >
      *
    </div>
  );
};

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

export const RenderButton = ({
  checkButton,
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
        style={{
          color: "var(--button-color-standby, #FFF)",
          letterSpacing: "0.28px",
          whiteSpace: "nowrap",
          borderRadius: "8px",
          backgroundColor: checkButton()
            ? "#B7B7B7"
            : "var(--button-color-active, #E91254)",
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
          padding: "0 80px",
        }}
      >
        <div
          style={{
            color: "var(--text-color-primary, #343A4A)",
            textAlign: "center",
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
  checkButton: PropTypes.func.isRequired,
  navigate: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  labelAccount: PropTypes.string.isRequired,
  labelRegLog: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  handleButton: PropTypes.func.isRequired,
};



export const RenderEmailRegister = ({ setEmailField, pathname }) => {
  if (pathname === "/register") {
    return (
      <React.Fragment>
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
                letterSpacing: "0.28px",
                whiteSpace: "nowrap",
                color: "var(--text-color-primary, #343A4A)",
              }}
            >
              Email
            </div>
            {renderFlagMandatory()}
          </div>
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
              style={{
                outline: "none",
                width: "100%",
                font: "500 14px/20px Helvetica Neue, sans-serif ",
              }}
              type="email"
              placeholder="Enter your Email"
            />
          </div>
        </div>
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
              Name
            </div>
            {renderFlagMandatory()}
          </div>
          <div
            style={{
              font: "500 14px Poppins, sans-serif ",
              color: "var(--text-color-tertiary, #888787)",
              whiteSpace: "nowrap",
              alignItems: "start",
              borderRadius: "8px",
              border: "1px solid var(--text-color-tertiary, #888787)",
              boxShadow: "0px 0px 0px 3px rgba(159, 135, 255, 0.20)",
              backgroundColor: "var(--brand-color-secondary, #FFF)",
              marginTop: "4px",
              width: "100%",
              justifyContent: "center",
              padding: "14px 60px 14px 16px",
            }}
          >
            <input
              style={{
                font: "500 14px/20px Helvetica Neue, sans-serif ",
                outline: "none",
                width: "100%",
              }}
              type="text"
              placeholder="Enter your Name"
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
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
        {renderFlagMandatory()}
      </div>
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
          onChange={(e) => setEmailField(e.target.value)}
          style={{
            font: "500 14px/20px Helvetica Neue, sans-serif ",
            outline: "none",
            width: "100%",
          }}
          type="email"
          placeholder="Enter your Email"
        />
      </div>
    </div>
  );
};
RenderEmailRegister.propTypes = {
  setEmailField: PropTypes.func.isRequired,
  pathname: PropTypes.string.isRequired,
};

export const RenderMobileRegister = ({ pathname }) => {
  if (pathname === "/register") {
    return (
      <React.Fragment>
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
              Phone Number
            </div>
            {renderFlagMandatory()}
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
              <DropDown />
              <input
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
              Name
            </div>
            {renderFlagMandatory()}
          </div>
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
              style={{
                outline: "none",
                width: "100%",
                font: "500 14px/20px Helvetica Neue, sans-serif ",
              }}
              type="email"
              placeholder="Enter your Email"
            />
          </div>
        </div>
      </React.Fragment>
    );
  } else {
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
            Phone Number
          </div>
          {renderFlagMandatory()}
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
            <DropDown />
            <input
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
  }
};
RenderMobileRegister.propTypes = {
  pathname: PropTypes.string.isRequired,
};

export const RenderLabel = ({ label = "", subLabel = "" }) => {
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
  label: PropTypes.string.isRequired,
  subLabel: PropTypes.string.isRequired,
};

export const RenderTab = ({ setIsChecked, tabScreen, setTabScreen }) => {
  return (
    <div
      style={{
        borderBottom: "1px solid var(--grey-scale-color-grey-scale-3, #D6D6D6)",
        display: "flex",
        paddingRight: "44px",
        justifyContent: "space-between",
        gap: "20px",
        marginTop: "16px",
      }}
    >
      <div
        onClick={() => {
          setIsChecked(false);
          setTabScreen("mobile");
        }}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            setTabScreen("mobile");
          }
        }}
        style={{
          color:
            tabScreen === "mobile" && "var(--brand-color-primary, #00524C)",
          textAlign: "center",
          letterSpacing: "0.28px",
          whiteSpace: "nowrap",
          justifyContent: "center",
          borderBottom:
            tabScreen === "mobile" &&
            "2px solid var(--brand-color-primary, #00524C)",
          flexGrow: "1",
          padding: "8px 10px",
          font: "700 14px/20px Helvetica Neue, sans-serif ",
        }}
      >
        Login with Phone Number
      </div>
      <div
        onClick={() => {
          setIsChecked(false);
          setTabScreen("email");
        }}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            setTabScreen("email");
          }
        }}
        style={{
          color: tabScreen === "email" && "var(--brand-color-primary, #00524C)",
          textAlign: "center",
          letterSpacing: "0.28px",
          whiteSpace: "nowrap",
          justifyContent: "center",
          borderBottom:
            tabScreen === "email" &&
            "2px solid var(--brand-color-primary, #00524C)",
          flexGrow: "1",
          padding: "8px 10px",
          font: "700 14px/20px Helvetica Neue, sans-serif ",
        }}
      >
        Login with Email
      </div>
    </div>
  );
};
RenderTab.propTypes = {
  setIsChecked: PropTypes.func.isRequired,
  tabScreen: PropTypes.string.isRequired,
  setTabScreen: PropTypes.func.isRequired,
};

export const RenderDivider = () => {
  return (
    <div style={{ display: "flex", alignItems: "center", marginTop: "16px" }}>
      <hr
        style={{
          width: "100%",
          borderTop: "1px solid gray",
        }}
      />
      <span style={{ padding: "0 20px" }}>or</span>
      <hr
        style={{
          width: "100%",
          borderTop: "1px solid gray",
        }}
      />
    </div>
  );
};
export const RenderButtonSocialMedia = () => {
  return (
    <div
      style={{
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "stretch",
        borderRadius: "8px",
        backgroundColor: "#425893",
        display: "flex",
        flexDirection: "column",
        padding: "12px 16px",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "10px",
        }}
      >
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/d5807d19e3f86363c5e47b44f844b443692639e259e6d70dba7837133b0f0c03?apiKey=7ef2d401d2464e0bb0e4708e7eee43f9&"
          style={{
            aspectRatio: "1",
            objectFit: "contain",
            objectPosition: "center",
            width: "24px",
            overflow: "hidden",
            maxWidth: "100%",
          }}
        />
        <div
          style={{
            color: "var(--button-color-standby, #FFF)",
            letterSpacing: "0.28px",
            alignSelf: "center",
            flexGrow: "1",
            whiteSpace: "nowrap",
            margin: "auto 0",
            font: "500 14px/20px Helvetica Neue, sans-serif ",
          }}
        >
          Login with Facebook
        </div>
      </div>
    </div>
  );
};
