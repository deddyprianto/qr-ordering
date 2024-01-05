
import PropTypes from "prop-types";
import { Trans } from "react-i18next";

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
        <button
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
            letterSpacing: "0.28px",
            whiteSpace: "nowrap",
            borderBottom:
              tabScreen === "mobile" &&
              "2px solid var(--brand-color-primary, #00524C)",
            font: "700 14px/20px Helvetica Neue, sans-serif ",
            paddingBottom: "5px",
          }}
        >
          <Trans i18nKey={"login_phone_number"}/>
        </button>
        <button
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
            letterSpacing: "0.28px",
            whiteSpace: "nowrap",
            borderBottom:
              tabScreen === "email" &&
              "2px solid var(--brand-color-primary, #00524C)",
            font: "700 14px/20px Helvetica Neue, sans-serif ",
            paddingBottom: "5px",
          }}
        >
          <Trans i18nKey={"login_email"}/>
        </button>
      </div>
    );
};
RenderTab.propTypes = {
  setIsChecked: PropTypes.func.isRequired,
  tabScreen: PropTypes.string.isRequired,
  setTabScreen: PropTypes.func.isRequired,
};