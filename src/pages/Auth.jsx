import { useState } from "react";
import { LoginIcon } from "../assets/svgIcon";
import RenderLabel from "../components/Auth/RenderLabel";
import { useNavigate } from "react-router-dom";

export function Component() {
  const navigate = useNavigate();
  const [tabScreen, setTabScreen] = useState("mobile");

  const renderDivider = () => {
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

  const renderButtonSocialMedia = () => {
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
  const renderTab = () => {
    return (
      <div
        style={{
          borderBottom:
            "1px solid var(--grey-scale-color-grey-scale-3, #D6D6D6)",
          display: "flex",
          paddingRight: "44px",
          justifyContent: "space-between",
          gap: "20px",
          marginTop: "16px",
        }}
      >
        <div
          onClick={() => setTabScreen("mobile")}
          onKeyDown={(event) => {
            if (event.key === "Enter" || event.key === " ") {
              setTabScreen("mobile")
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
          onClick={() => setTabScreen("email")}
          onKeyDown={(event) => {
            if (event.key === "Enter" || event.key === " ") {
              setTabScreen("email")
            }
          }}
          style={{
            color:
              tabScreen === "email" && "var(--brand-color-primary, #00524C)",
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

  const renderMobileRegister = () => {
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
            {/* LOL */}
            Phone Number
          </div>
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
              gap: "16px",
            }}
          >
            <div
              style={{
                justifyContent: "space-between",
                alignItems: "center",
                display: "flex",
                gap: "4px",
              }}
            >
              <div
                style={{
                  color: "var(--text-color-primary, #343A4A)",
                  letterSpacing: "0.28px",
                  flexGrow: "1",
                  whiteSpace: "nowrap",
                  margin: "auto 0",
                  font: "500 14px/20px Helvetica Neue, sans-serif ",
                }}
              >
                +65
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/ab5b2e840056d69bbc51fd9e0f14d422a048bcc7862dce4761d855fa7ffd66e1?apiKey=7ef2d401d2464e0bb0e4708e7eee43f9&"
                style={{
                  aspectRatio: "1",
                  objectFit: "contain",
                  objectPosition: "center",
                  width: "24px",
                  overflow: "hidden",
                  alignSelf: "stretch",
                  maxWidth: "100%",
                }}
              />
            </div>
            <div
              style={{
                color: "var(--text-color-tertiary, #888787)",
                letterSpacing: "0.28px",
                alignSelf: "center",
                flexGrow: "1",
                whiteSpace: "nowrap",
                margin: "auto 0",
                font: "500 14px/20px Helvetica Neue, sans-serif ",
              }}
            >
              Enter your phone number
            </div>
          </div>
        </div>
      </div>
    );
  };
  const renderTermAndCondition = () => {
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
        <div
          style={{
            borderRadius: "4px",
            border: "2px solid var(--text-color-primary, #343A4A)",
            display: "flex",
            width: "20px",
            height: "20px",
            flexDirection: "column",
          }}
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
          <span style={{ color: "rgba(0,82,76,1)" }}>
            Terms and Conditions{" "}
          </span>
          <span style={{ color: "rgba(52,58,74,1" }}>and </span>
          <span style={{ color: "rgba(0,82,76,1)" }}>Privacy Policy</span>
        </div>
      </div>
    );
  };
  const renderButtonLogin = () => {
    return (
      <div
        style={{
          alignSelf: "stretch",
          display: "flex",
          flexDirection: "column",
          marginTop: "24px",
        }}
      >
        <div
          onClick={() => navigate("/otp")}
          onKeyDown={(event) => {
            if (event.key === "Enter" || event.key === " ") {
              navigate("/otp");
            }
          }}
          style={{
            color: "var(--button-color-standby, #FFF)",
            letterSpacing: "0.28px",
            whiteSpace: "nowrap",
            borderRadius: "8px",
            backgroundColor: "var(--button-color-active, #E91254)",
            width: "100%",
            padding: "11px 0px",
            font: "500 14px/20px Helvetica Neue, sans-serif ",
            textAlign: "center",
          }}
        >
          Login
        </div>
        <div
          style={{
            justifyContent: "space-between",
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
            Don’t have account?
          </div>
          <div
            style={{
              color: "var(--text-color-quaternary, #00524C)",
              textAlign: "center",
              letterSpacing: "0.28px",
              textDecorationLine: "underline",
              whiteSpace: "nowrap",
              font: "700 14px/20px Helvetica Neue, sans-serif ",
            }}
          >
            Register
          </div>
        </div>
      </div>
    );
  };
  const renderLabelGuestCO = () => {
    return (
      <div
        style={{
          justifyContent: "center",
          alignItems: "start",
          alignSelf: "stretch",
          display: "flex",
          gap: "8px",
          padding: "0 79px",
          marginTop: "16px",
        }}
      >
        <LoginIcon />
        <div
          style={{
            color: "var(--text-color-quaternary, #00524C)",
            textAlign: "center",
            alignSelf: "stretch",
            flexGrow: "1",
            whiteSpace: "nowrap",
            font: "700 18px/25px Helvetica Neue, sans-serif ",
          }}
        >
          CONTINUE AS A GUEST
        </div>
      </div>
    );
  };
  const renderEmailRegister = () => {
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
            Email
          </div>
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
          Enter your email
        </div>
      </div>
    );
  };
  const renderRootComponentTab = () => {
    if (tabScreen === "mobile") {
      return renderMobileRegister();
    } else {
      return renderEmailRegister();
    }
  };
  return (
    <div style={{ padding: "16px", paddingBottom: 100 }}>
      <RenderLabel label="Welcome to IPSUM!" />
      {renderButtonSocialMedia()}
      {renderDivider()}
      {renderTab()}
      {renderRootComponentTab()}
      {renderTermAndCondition()}
      {renderButtonLogin()}
      <hr
        style={{
          marginTop: "24px",
          width: "100%",
          borderTop: "1px solid gray",
        }}
      />
      {renderLabelGuestCO()}
    </div>
  );
}
