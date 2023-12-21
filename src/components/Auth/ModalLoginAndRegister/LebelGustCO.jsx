import { LoginIcon } from "../../../assets/svgIcon";

export const RenderLabelGuestCO = () => {
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