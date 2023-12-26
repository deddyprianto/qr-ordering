import { IconFaceBook } from "../../../assets/svgIcon";

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
          padding: "10px",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "10px",
          }}
        >
          <IconFaceBook />
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