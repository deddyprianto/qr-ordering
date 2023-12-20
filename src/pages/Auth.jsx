import { useState } from "react";
import { LoginIcon } from "../assets/svgIcon";
import { useNavigate, useLocation } from "react-router-dom";
import {
  RenderButton,
  RenderButtonSocialMedia,
  RenderDivider,
  RenderEmailRegister,
  RenderLabel,
  RenderMobileRegister,
  RenderTab,
  RenderTermAndCondition,
} from "../components/Auth/ComponentHelper";

export function Component() {
  const location = useLocation();
  const pathname = location.pathname;
  const [isChecked, setIsChecked] = useState(false);
  const [emailField, setEmailField] = useState("");
  const [nameField, setNameField] = useState("");
  console.log(nameField);
  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };
  const navigate = useNavigate();
  const [tabScreen, setTabScreen] = useState("mobile");

  const checkButton = () => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const flowChecking = !emailRegex.test(emailField) && !isChecked;
    return flowChecking;
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

  const renderRootComponentTab = () => {
    if (tabScreen === "mobile") {
      return (
        <RenderMobileRegister pathname={pathname} setNameField={setNameField} />
      );
    } else {
      return (
        <RenderEmailRegister
          pathname={pathname}
          setEmailField={setEmailField}
        />
      );
    }
  };

  const handleButtonLogin = () => {
    // call api inside this fn
    navigate("/otp");
  };

  return (
    <div style={{ padding: "16px", paddingBottom: 100 }}>
      <RenderLabel label="Lorem Ipsum" />
      <RenderButtonSocialMedia />
      <RenderDivider />
      <RenderTab
        setIsChecked={setIsChecked}
        tabScreen={tabScreen}
        setTabScreen={setTabScreen}
      />
      {renderRootComponentTab()}
      <RenderTermAndCondition
        isChecked={isChecked}
        handleCheckboxChange={handleCheckboxChange}
      />
      <RenderButton
        checkButton={checkButton}
        navigate={navigate}
        label="Login"
        labelAccount="Don’t have account?"
        labelRegLog="Register"
        path="/register"
        handleButton={handleButtonLogin}
      />
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
