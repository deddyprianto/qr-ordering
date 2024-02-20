import { HomeIcon, ProfileIcon, TaskListIcon } from "../../assets/svgIcon";
import { Trans } from "react-i18next";
import { useUpdateURLWithQueryParams } from "../../../hooks/usePathCustom";

export const RenderNavigationBar = () => {
  const updateURL = useUpdateURLWithQueryParams();
  return (
    <nav
      style={{
        boxShadow: "0px -5px 10px 0px rgba(0, 0, 0, 0.05)",
        backgroundColor: "var(--brand-color-tertiary, #FFF)",
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
        gap: "20px",
        padding: "8px 10px",
      }}
    >
      <button
        style={{
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          flexGrow: "1",
          flexBasis: "0%",
          flexDirection: "column",
        }}
        onClick={() => updateURL("/")}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            updateURL("/");
          }
        }}
      >
        <HomeIcon />
        <div
          style={{
            alignSelf: "stretch",
            color: "var(--brand-color-primary, #00524C)",
            textAlign: "center",
            letterSpacing: "0.28px",
            marginTop: "4px",
            font: "700 14px/20px Helvetica Neue, sans-serif ",
          }}
        >
          <Trans i18nKey={"home"} />
        </div>
      </button>
      <button
        style={{
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          flexGrow: "1",
          flexBasis: "0%",
          flexDirection: "column",
          padding: "2px 0",
        }}
        onClick={() => updateURL("/cart")}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            updateURL("/cart");
          }
        }}
      >
        <TaskListIcon />
        <div
          style={{
            alignSelf: "stretch",
            color: "var(--brand-color-secondary, #E80B52)",
            textAlign: "center",
            letterSpacing: "0.28px",
            marginTop: "7px",
            whiteSpace: "nowrap",
            font: "700 14px/20px Helvetica Neue, sans-serif ",
          }}
        >
          <Trans i18nKey={"orders"} />
        </div>
      </button>
      <button
        style={{
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          flexGrow: "1",
          flexBasis: "0%",
          flexDirection: "column",
        }}
        onClick={() => updateURL("/profile")}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            updateURL("/profile");
          }
        }}
      >
        <ProfileIcon />
        <div
          style={{
            alignSelf: "stretch",
            color: "var(--brand-color-secondary, #E80B52)",
            textAlign: "center",
            letterSpacing: "0.28px",
            marginTop: "4px",
            whiteSpace: "nowrap",
            font: "700 14px/20px Helvetica Neue, sans-serif ",
          }}
        >
          <Trans i18nKey={"profile"} />
        </div>
      </button>
    </nav>
  );
};
