import { useState, Fragment } from "react";
import { LoginIcon } from "../../assets/svgIcon";
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
} from "../../components/Auth/ComponentHelper";
import { Dialog, Transition } from "@headlessui/react";
import { useDispatch, useSelector } from "react-redux";
import { setIsOpenModalAuth } from "../../app/dataSlice";

export const ModalAuth = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.dataSlice.isOpenModalAuth);
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
          padding: "16px",
          marginTop: "16px",
          backgroundColor: "#FFF2DF",
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
  const renderMainComponent = () => {
    return (
      <div style={{ padding: "16px" }}>
        <RenderLabel
          dispatchAction={dispatch}
          label="Welcome to CHICKY FUN!"
          subLabel="Access this cart page by selecting Register, Log In, or Continue as a Guest."
        />
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
            borderTop: "1px solid #D6D6D6",
          }}
        />
        {renderLabelGuestCO()}
      </div>
    );
  };
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        onClose={() => dispatch(setIsOpenModalAuth(true))}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex  items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transhtmlForm overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all h-full">
                {renderMainComponent()}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};
