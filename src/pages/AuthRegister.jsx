import { useState } from "react";
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
  const [tabScreen, setTabScreen] = useState("mobile");
  const [isChecked, setIsChecked] = useState(false);
  const [emailField, setEmailField] = useState("");
  const navigate = useNavigate();

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };
  const checkButton = () => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const flowChecking = !emailRegex.test(emailField) && !isChecked;
    return flowChecking;
  };

  const renderRootComponentTab = () => {
    if (tabScreen === "mobile") {
      return <RenderMobileRegister pathname={pathname} />;
    } else {
      return (
        <RenderEmailRegister
          pathname={pathname}
          setEmailField={setEmailField}
        />
      );
    }
  };
  const handleButtonRegister = () => {
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
        label="Register"
        checkButton={checkButton}
        navigate={navigate}
        labelAccount="Already have account?"
        labelRegLog="Login"
        path="/auth"
        handleButton={handleButtonRegister}
      />
    </div>
  );
}
